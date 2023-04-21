import { Address } from '@ethereumjs/util'
import { hexToBytes, utf8ToBytes } from 'ethereum-cryptography/utils'
import * as tape from 'tape'

import { EVM } from '../src/evm'

import { getEEI } from './utils'

import type { ExecResult } from '../src/evm'
import type { PrecompileInput } from '../src/precompiles'

const sender = new Address(hexToBytes('44'.repeat(20)))
const newPrecompile = new Address(hexToBytes('ff'.repeat(20)))
const shaAddress = new Address(hexToBytes('0000000000000000000000000000000000000002'))
const expectedReturn = utf8ToBytes('1337')
const expectedGas = BigInt(10)

function customPrecompile(_input: PrecompileInput): ExecResult {
  return {
    executionGasUsed: expectedGas,
    returnValue: expectedReturn,
  }
}

tape('EVM -> custom precompiles', (t) => {
  t.test('should override existing precompiles', async (st) => {
    const EVMOverride = await EVM.create({
      customPrecompiles: [
        {
          address: shaAddress,
          function: customPrecompile,
        },
      ],
      eei: await getEEI(),
    })
    const result = await EVMOverride.runCall({
      to: shaAddress,
      gasLimit: BigInt(30000),
      data: utf8ToBytes(''),
      caller: sender,
    })

    st.deepEquals(result.execResult.returnValue, expectedReturn, 'return value is correct')
    st.equals(result.execResult.executionGasUsed, expectedGas, 'gas used is correct')
  })

  t.test('should delete existing precompiles', async (st) => {
    const EVMOverride = await EVM.create({
      customPrecompiles: [
        {
          address: shaAddress,
        },
      ],
      eei: await getEEI(),
    })
    const result = await EVMOverride.runCall({
      to: shaAddress,
      gasLimit: BigInt(30000),
      data: hexToBytes(''),
      caller: sender,
    })
    st.deepEquals(result.execResult.returnValue, utf8ToBytes(''), 'return value is correct')
    st.equals(result.execResult.executionGasUsed, BigInt(0), 'gas used is correct')
  })

  t.test('should add precompiles', async (st) => {
    const EVMOverride = await EVM.create({
      customPrecompiles: [
        {
          address: newPrecompile,
          function: customPrecompile,
        },
      ],
      eei: await getEEI(),
    })
    const result = await EVMOverride.runCall({
      to: newPrecompile,
      gasLimit: BigInt(30000),
      data: hexToBytes(''),
      caller: sender,
    })
    st.deepEquals(result.execResult.returnValue, expectedReturn, 'return value is correct')
    st.equals(result.execResult.executionGasUsed, expectedGas, 'gas used is correct')
  })

  t.test('should not persist changes to precompiles', async (st) => {
    let EVMSha = await EVM.create({ eei: await getEEI() })
    const shaResult = await EVMSha.runCall({
      to: shaAddress,
      gasLimit: BigInt(30000),
      data: hexToBytes(''),
      caller: sender,
    })
    const EVMOverride = await EVM.create({
      customPrecompiles: [
        {
          address: shaAddress,
          function: customPrecompile,
        },
      ],
      eei: await getEEI(),
    })
    const result = await EVMOverride.runCall({
      to: shaAddress,
      gasLimit: BigInt(30000),
      data: hexToBytes(''),
      caller: sender,
    })
    // sanity: check we have overridden
    st.deepEquals(result.execResult.returnValue, expectedReturn, 'return value is correct')
    st.equals(result.execResult.executionGasUsed, expectedGas, 'gas used is correct')
    EVMSha = await EVM.create({ eei: await getEEI() })
    const shaResult2 = await EVMSha.runCall({
      to: shaAddress,
      gasLimit: BigInt(30000),
      data: hexToBytes(''),
      caller: sender,
    })
    st.deepEquals(
      shaResult.execResult.returnValue,
      shaResult2.execResult.returnValue,
      'restored sha precompile - returndata correct'
    )
    st.equals(
      shaResult.execResult.executionGasUsed,
      shaResult2.execResult.executionGasUsed,
      'restored sha precompile - gas correct'
    )
  })
  t.test('shold copy custom precompiles', async (st) => {
    const evm = await EVM.create({
      customPrecompiles: [
        {
          address: shaAddress,
          function: customPrecompile,
        },
      ],
      eei: await getEEI(),
    })
    const evmCopy = evm.copy()
    st.deepEqual(
      (evm as any)._customPrecompiles,
      (evmCopy as any)._customPrecompiles,
      'evm.copy() successfully copied customPrecompiles option'
    )
  })
})