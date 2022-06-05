#!/usr/bin/env node

import RLP, { utils } from '../dist/esm/index.js'
const method = process.argv[2]
const strInput = process.argv[3]
const { bytesToHex } = utils

const run = () => {
  if (typeof strInput !== 'string') {
    return console.error(`Expected JSON string input, received type: ${typeof strInput}`)
  }

  if (method === 'encode') {
    // Parse JSON
    let json
    try {
      json = JSON.parse(strInput)
    } catch (error) {
      const errorMsg = error.message ? error.message : error
      return console.error(`Error could not parse JSON: ${errorMsg}`)
    }

    // Encode RLP
    try {
      const encoded = RLP.encode(json)
      console.log('0x' + bytesToHex(encoded))
    } catch (error) {
      const errorMsg = error.message ? error.message : error
      console.error(`Error encoding RLP: ${errorMsg}`)
    }
  } else if (method === 'decode') {
    // Decode
    try {
      const decoded = RLP.decode(strInput)
      const json = JSON.stringify(arrToJSON(decoded))
      console.log(json)
    } catch (error) {
      const errorMsg = error.message ? error.message : error
      console.error(`Error decoding RLP: ${errorMsg}`)
    }
  } else {
    console.error('Unsupported method')
  }
}

run()

/**
 * Uint8Array or Array<Uint8Array> to JSON
 */
function arrToJSON(ba) {
  if (ba instanceof Uint8Array) {
    return bytesToHex(ba)
  } else if (ba instanceof Array) {
    const arr = []
    for (let i = 0; i < ba.length; i++) {
      arr.push(arrToJSON(ba[i]))
    }
    return arr
  }
}
