import { Address, bufferToHex, toBuffer } from '@ethereumjs/util'
import { VM } from '@ethereumjs/vm'
import { BigNumber, ethers } from 'ethers'

import { EthersStateManager } from '.'

export class EthersForkedStateProvider extends ethers.providers.JsonRpcProvider {
  private ethersStateManager: EthersStateManager
  private vm: VM
  constructor(provider: string | ethers.providers.JsonRpcProvider) {
    super(typeof provider === 'string' ? provider : provider.connection)
    this.ethersStateManager = new EthersStateManager({ blockTag: 1n, provider })
    this.vm = new (VM as any)({
      stateManager: this.ethersStateManager,
    }) as VM
  }

  async getCode(addressOrName: string | Promise<string>): Promise<string> {
    const address = new Address(toBuffer(await addressOrName))
    const result = await this.ethersStateManager.getContractCode(address)
    return bufferToHex(result)
  }
  async getStorageAt(
    addressOrName: string | Promise<string>,
    position: string | number | bigint | Buffer,
    blockTag?: ethers.providers.BlockTag
  ): Promise<string> {
    const state = this.ethersStateManager.copy()
    blockTag === undefined ||
      this.ethersStateManager.setBlockTag(blockTag === 'earliest' ? 'earliest' : BigInt(blockTag))
    const address = new Address(toBuffer(await addressOrName))
    const key = toBuffer(position)
    const result = await state.getContractStorage(address, key)
    return bufferToHex(result)
  }

  async getBalance(
    addressOrName: string | Promise<string>,
    blockTag?: ethers.providers.BlockTag
  ): Promise<BigNumber> {
    blockTag === undefined ||
      this.ethersStateManager.setBlockTag(blockTag === 'earliest' ? 'earliest' : BigInt(blockTag))
    const _address = new Address(toBuffer(await this._getAddress(addressOrName)))
    const account = await this.ethersStateManager.getAccount(_address)
    const balance = account.balance
    return BigNumber.from(balance)
  }

  async getTransactionCount(
    addressOrName: string | Promise<string>,
    blockTag?: ethers.providers.BlockTag
  ): Promise<number> {
    blockTag === undefined ||
      this.ethersStateManager.setBlockTag(blockTag === 'earliest' ? 'earliest' : BigInt(blockTag))
    const _address = Address.fromString(await this._getAddress(addressOrName))
    const account = await this.ethersStateManager.getAccount(_address)
    const nonce = account.nonce
    return Number(nonce)
  }
}
