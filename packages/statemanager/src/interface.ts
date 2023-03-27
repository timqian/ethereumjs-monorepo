import type { Proof } from './stateManager'
import type { Account, Address } from '@ethereumjs/util'

/**
 * Storage values of an account
 */
export interface StorageDump {
  [key: string]: string
}

export type AccountFields = Partial<Pick<Account, 'nonce' | 'balance' | 'storageRoot' | 'codeHash'>>

export interface StateAccess {
  accountExists(address: Address): Promise<boolean>
  getAccount(address: Address): Promise<Account>
  putAccount(address: Address, account: Account): Promise<void>
  accountIsEmpty(address: Address): Promise<boolean>
  deleteAccount(address: Address): Promise<void>
  modifyAccountFields(address: Address, accountFields: AccountFields): Promise<void>
  putContractCode(address: Address, value: Uint8Array): Promise<void>
  getContractCode(address: Address): Promise<Uint8Array>
  getContractStorage(address: Address, key: Uint8Array): Promise<Uint8Array>
  putContractStorage(address: Address, key: Uint8Array, value: Uint8Array): Promise<void>
  clearContractStorage(address: Address): Promise<void>
  checkpoint(): Promise<void>
  commit(): Promise<void>
  revert(): Promise<void>
  getStateRoot(): Promise<Uint8Array>
  setStateRoot(stateRoot: Uint8Array): Promise<void>
  getProof?(address: Address, storageSlots: Uint8Array[]): Promise<Proof>
  verifyProof?(proof: Proof): Promise<boolean>
  hasStateRoot(root: Uint8Array): Promise<boolean>
}

export interface StateManager extends StateAccess {
  copy(): StateManager
  flush(): Promise<void>
  dumpStorage(address: Address): Promise<StorageDump>
}
