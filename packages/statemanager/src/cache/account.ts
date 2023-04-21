import { bytesToHex } from '@ethereumjs/util'
import { debug as createDebugLogger } from 'debug'
import { OrderedMap } from 'js-sdsl'

import { Cache } from './cache'
import { CacheType } from './types'

import type { CacheOpts } from './types'
import type { Account, Address } from '@ethereumjs/util'
import type LRUCache from 'lru-cache'

const LRU = require('lru-cache')

/**
 * account: undefined
 *
 * Account is known to not exist in the trie
 */
type AccountCacheElement = {
  accountRLP: Uint8Array | undefined
}

export class AccountCache extends Cache {
  _lruCache: LRUCache<string, AccountCacheElement> | undefined
  _orderedMapCache: OrderedMap<string, AccountCacheElement> | undefined

  /**
   * Diff cache collecting the state of the cache
   * at the beginning of checkpoint height
   * (respectively: before a first modification)
   *
   * If the whole cache element is undefined (in contrast
   * to the account), the element didn't exist in the cache
   * before.
   */
  _diffCache: OrderedMap<string, AccountCacheElement | undefined>[] = []

  constructor(opts: CacheOpts) {
    super()
    if (opts.type === CacheType.LRU) {
      this._lruCache = new LRU({
        max: opts.size,
        updateAgeOnGet: true,
      })
    } else {
      this._orderedMapCache = new OrderedMap()
    }

    this._diffCache.push(new OrderedMap())
    this._debug = createDebugLogger('statemanager:cache:account')
  }

  _saveCachePreState(cacheKeyHex: string) {
    const it = this._diffCache[this._checkpoints].find(cacheKeyHex)
    if (it.equals(this._diffCache[this._checkpoints].end())) {
      let oldElem: AccountCacheElement | undefined
      if (this._lruCache) {
        oldElem = this._lruCache!.get(cacheKeyHex)
      } else {
        oldElem = this._orderedMapCache!.getElementByKey(cacheKeyHex)
      }
      this._diffCache[this._checkpoints].setElement(cacheKeyHex, oldElem)
    }
  }

  /**
   * Puts account to cache under its address.
   * @param address - Address of account
   * @param account - Account or undefined if account doesn't exist in the trie
   */
  put(address: Address, account: Account | undefined): void {
    const addressHex = bytesToHex(address.bytes)
    this._saveCachePreState(addressHex)
    const elem = {
      accountRLP: account !== undefined ? account.serialize() : undefined,
    }

    if (this.DEBUG) {
      this._debug(`Put account ${addressHex}`)
    }
    if (this._lruCache) {
      this._lruCache!.set(addressHex, elem)
    } else {
      this._orderedMapCache!.setElement(addressHex, elem)
    }
    this._stats.writes += 1
  }

  /**
   * Returns the queried account or undefined if account doesn't exist
   * @param address - Address of account
   */
  get(address: Address): AccountCacheElement | undefined {
    const addressHex = bytesToHex(address.bytes)
    if (this.DEBUG) {
      this._debug(`Get account ${addressHex}`)
    }

    let elem: AccountCacheElement | undefined
    if (this._lruCache) {
      elem = this._lruCache!.get(addressHex)
    } else {
      elem = this._orderedMapCache!.getElementByKey(addressHex)
    }
    this._stats.reads += 1
    if (elem) {
      this._stats.hits += 1
    }
    return elem
  }

  /**
   * Marks address as deleted in cache.
   * @param address - Address
   */
  del(address: Address): void {
    const addressHex = bytesToHex(address.bytes)
    this._saveCachePreState(addressHex)
    if (this.DEBUG) {
      this._debug(`Delete account ${addressHex}`)
    }
    if (this._lruCache) {
      this._lruCache!.set(addressHex, {
        accountRLP: undefined,
      })
    } else {
      this._orderedMapCache!.setElement(addressHex, {
        accountRLP: undefined,
      })
    }

    this._stats.dels += 1
  }

  /**
   * Flushes cache by returning accounts that have been modified
   * or deleted and resetting the diff cache (at checkpoint height).
   */
  flush(): [string, AccountCacheElement][] {
    if (this.DEBUG) {
      this._debug(`Flushing cache on checkpoint ${this._checkpoints}`)
    }

    const diffMap = this._diffCache[this._checkpoints]!
    const it = diffMap.begin()

    const items: [string, AccountCacheElement][] = []

    while (!it.equals(diffMap.end())) {
      const cacheKeyHex = it.pointer[0]
      let elem: AccountCacheElement | undefined
      if (this._lruCache) {
        elem = this._lruCache!.get(cacheKeyHex)
      } else {
        elem = this._orderedMapCache!.getElementByKey(cacheKeyHex)
      }

      if (elem !== undefined) {
        items.push([cacheKeyHex, elem])
      }
      it.next()
    }
    this._diffCache[this._checkpoints] = new OrderedMap()
    return items
  }

  /**
   * Revert changes to cache last checkpoint (no effect on trie).
   */
  revert(): void {
    this._checkpoints -= 1
    if (this.DEBUG) {
      this._debug(`Revert to checkpoint ${this._checkpoints}`)
    }
    const diffMap = this._diffCache.pop()!

    const it = diffMap.begin()
    while (!it.equals(diffMap.end())) {
      const addressHex = it.pointer[0]
      const elem = it.pointer[1]
      if (elem === undefined) {
        if (this._lruCache) {
          this._lruCache!.delete(addressHex)
        } else {
          this._orderedMapCache!.eraseElementByKey(addressHex)
        }
      } else {
        if (this._lruCache) {
          this._lruCache!.set(addressHex, elem)
        } else {
          this._orderedMapCache!.setElement(addressHex, elem)
        }
      }
      it.next()
    }
  }

  /**
   * Commits to current state of cache (no effect on trie).
   */
  commit(): void {
    this._checkpoints -= 1
    if (this.DEBUG) {
      this._debug(`Commit to checkpoint ${this._checkpoints}`)
    }
    const diffMap = this._diffCache.pop()!

    const it = diffMap.begin()
    while (!it.equals(diffMap.end())) {
      const addressHex = it.pointer[0]
      const itOld = this._diffCache[this._checkpoints].find(addressHex)
      if (itOld.equals(this._diffCache[this._checkpoints].end())) {
        const elem = it.pointer[1]
        this._diffCache[this._checkpoints].setElement(addressHex, elem)
      }
      it.next()
    }
  }

  /**
   * Marks current state of cache as checkpoint, which can
   * later on be reverted or committed.
   */
  checkpoint(): void {
    this._checkpoints += 1
    if (this.DEBUG) {
      this._debug(`New checkpoint ${this._checkpoints}`)
    }
    this._diffCache.push(new OrderedMap())
  }

  /**
   * Returns the size of the cache
   * @returns
   */
  size() {
    if (this._lruCache) {
      return this._lruCache!.size
    } else {
      return this._orderedMapCache!.size()
    }
  }

  /**
   * Returns a dict with cache stats
   * @param reset
   */
  stats(reset = true) {
    const stats = { ...this._stats }
    stats.size = this.size()
    if (reset) {
      this._stats = {
        size: 0,
        reads: 0,
        hits: 0,
        writes: 0,
        dels: 0,
      }
    }
    return stats
  }

  /**
   * Clears cache.
   */
  clear(): void {
    if (this.DEBUG) {
      this._debug(`Clear cache`)
    }
    if (this._lruCache) {
      this._lruCache!.clear()
    } else {
      this._orderedMapCache!.clear()
    }
  }
}