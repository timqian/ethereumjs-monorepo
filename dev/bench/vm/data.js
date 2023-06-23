window.BENCHMARK_DATA = {
  "lastUpdate": 1687509162426,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cac66945736f3f1c3a66895e5de9df47aea96bb9",
          "message": "vm: Discard blob txs with missing blobs for block building (#2765)\n\n* vm: Discard blob txs with missing blobs for block building\r\n\r\n* refactor to reduce surface\r\n\r\n* remove non existent case and enhance coverage\r\n\r\n* fix the txtype on ethprotocol handling",
          "timestamp": "2023-06-10T21:58:31+05:30",
          "tree_id": "3c380167e9f057e56ab3fea1007a9c9d8d3d0b29",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/cac66945736f3f1c3a66895e5de9df47aea96bb9"
        },
        "date": 1686414707805,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31805,
            "range": "±4.47%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30903,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31761,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25961,
            "range": "±10.68%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30215,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "373e573e6b294ff93d53a84632aead9b107d4012",
          "message": "monorepo: remove instances of `any` typecasting (#2772)",
          "timestamp": "2023-06-11T09:20:18-04:00",
          "tree_id": "ad2fac4337f1da9d3b4ee05af9d6b7d9db375d28",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/373e573e6b294ff93d53a84632aead9b107d4012"
        },
        "date": 1686489823251,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31466,
            "range": "±5.95%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31864,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31465,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30691,
            "range": "±3.17%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24416,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "960fd0a4c58af3d234f568ec56e221bf1c0ccaee",
          "message": "tx: Generic Transaction Interface (#2767)\n\n* tx/transaction-interface\r\n\r\n* tx: implemement transaction interface in basetransaction\r\n\r\n* tx: update transaction types to use new generic types\r\n\r\n* tx: refactor with updated tx interfaces\r\n\r\n* block: refactor with updated tx interfaces\r\n\r\n* client: refactor with updated tx interfaces\r\n\r\n* vm: refactor with updated tx interfaces\r\n\r\n* devp2p: refactor with updated tx interfaces\r\n\r\n* monorepo: adjust test with updated tx types\r\n\r\n* docs: update READMEs Transaction->LegacyTransaction\r\n\r\n* tx: replace as any typecast with more precise typecast\r\n\r\n* client: simplify TxData typecastings\r\n\r\n* tx: more simplifications\r\n\r\n* tx: new tx typeguards and use enums instead of direct number comparison\r\n\r\n* tx: TTransactionType -> T generic renaming\r\n\r\n* tx: address review by renaming UnknownTransaction to TypedTransaction and using the TransactionType enum instead of numbers\r\n\r\n* linting fix\r\n\r\n* tx: update naming UnknownTxData -> TypedTxData\r\n\r\n* tx: declare TxData and TxValuesArray types in transaction class files\r\n\r\n* client: Transaction -> LegacyTransaction\r\n\r\n* vm: simplify test and use enums when possible\r\n\r\n* tx: update example import\r\n\r\n* tx: update more examples\r\n\r\n* add improvements\r\n\r\n* fix error message\r\n\r\n* improv\r\n\r\n* type improv\r\n\r\n* tx: fix rebase issue\r\n\r\n---------\r\n\r\nCo-authored-by: harkamal <gajinder@g11.in>",
          "timestamp": "2023-06-12T11:47:22+02:00",
          "tree_id": "ef48186c3d10072231e52fdad6bc276b8845f6b4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/960fd0a4c58af3d234f568ec56e221bf1c0ccaee"
        },
        "date": 1686563445665,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31101,
            "range": "±5.45%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31378,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 27259,
            "range": "±9.68%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30825,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29935,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f17183248a3cc95b5f93116dfbd1f76ec42ee93",
          "message": "tx: remove default hardfork from tx classes (#2776)\n\n* tx: remove default hardfork\r\n\r\n* tx: update txtype of 4844 tx\r\n\r\n* tx: remove default hardfork from baseTransaction class",
          "timestamp": "2023-06-12T16:45:31-04:00",
          "tree_id": "58dc5a32619faa052b216b68d3e050e4d25c5bc0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6f17183248a3cc95b5f93116dfbd1f76ec42ee93"
        },
        "date": 1686603348829,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25480,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26905,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 24551,
            "range": "±5.88%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21722,
            "range": "±12.16%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25447,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a86fe252742108441258402b914fed4ef4f66916",
          "message": "common: update the blob target and limit to 3/6 respectively (#2775)\n\n* common: update the blob target and limit to 3/6 respectively\r\n\r\n* fix block spec\r\n\r\n* spec\r\n\r\n* fix spec\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-13T12:55:40+05:30",
          "tree_id": "d43e2181982f5fbb36e1344f9c0bf0d40ce86041",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a86fe252742108441258402b914fed4ef4f66916"
        },
        "date": 1686641345790,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30810,
            "range": "±5.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31689,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31531,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30837,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24785,
            "range": "±11.39%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc9a613a8be56915196eea99f8e846a2dead9351",
          "message": "vm: fix the dataGasPrice calculation in running the tx (#2779)",
          "timestamp": "2023-06-13T12:04:14-04:00",
          "tree_id": "16ad939486e5940f3caf7c63edfe58b2b698f23f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/bc9a613a8be56915196eea99f8e846a2dead9351"
        },
        "date": 1686673208044,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31111,
            "range": "±5.65%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31657,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30577,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30065,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22834,
            "range": "±12.27%",
            "unit": "ops/sec",
            "extra": "61 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c06214afeff69de15df8150fd5da2f79b6ba939b",
          "message": "Remove `libp2p` transport layer (#2758)\n\n* Make libp2p deps optional\n\n* experiments\n\n* run npm install when building browser\n\n* Remove convenience types\n\n* Remove more libp2p stuff\n\n* Move libp2p stuff to legacy folder\n\n* Update browser config stuff to exclude ethers\n\n* Turn off sync and add v8Engine stub\n\n* skip transports on browser build\n\n* eslint ignore libp2p archive\n\n* clean up comments",
          "timestamp": "2023-06-13T13:25:34-04:00",
          "tree_id": "f8b7fbe0512671c25732aaa3df86d74f36fbf47c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c06214afeff69de15df8150fd5da2f79b6ba939b"
        },
        "date": 1686677337421,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31959,
            "range": "±3.97%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32055,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31911,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27569,
            "range": "±8.71%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29907,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "85 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d7b4d9d043ecd44ac1eb9bb14ba8eb8bbdbe2d9",
          "message": "vm: fix tests (#2780)\n\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-14T11:32:20+02:00",
          "tree_id": "477a31da93a3ab576f25b0a1dd4079a193bdc181",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4d7b4d9d043ecd44ac1eb9bb14ba8eb8bbdbe2d9"
        },
        "date": 1686735376217,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19006,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19348,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19185,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18045,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 14958,
            "range": "±12.26%",
            "unit": "ops/sec",
            "extra": "68 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b8d9f4e3032d9bd04e8fafe020887f4aef29ccb",
          "message": "client: fix new payload 4844 validations (#2784)\n\n* client: fix new payload 4844 validations\r\n\r\n* fix spec",
          "timestamp": "2023-06-14T16:28:59+02:00",
          "tree_id": "aa77096fa13938f4e44b9ac6c533457f99892606",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6b8d9f4e3032d9bd04e8fafe020887f4aef29ccb"
        },
        "date": 1686753144124,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31824,
            "range": "±4.88%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31445,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31488,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25859,
            "range": "±10.66%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29825,
            "range": "±3.07%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b21e8d2db5b7338009e4a4c8ed85a39f9eba8beb",
          "message": "Utils tests (#2781)\n\n* Add tests for lock.ts\r\n\r\n* Add tests for mapDB.ts\r\n\r\n* When copying, create a new coppied backing map\r\n\r\n* Fix linting issues\r\n\r\n* Revert \"When copying, create a new coppied backing map\"\r\n\r\nThis reverts commit a7cd158b2844c049e7892167976b37eca1f6e5d9.\r\n\r\n* Remove test for copy function\r\n\r\n* Update packages/util/test/mapDB.spec.ts\r\n\r\nCo-authored-by: acolytec3 <konjou@gmail.com>\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-15T22:11:57-04:00",
          "tree_id": "3e33055e7fdc79f080301ee8e486a08b2f64ef40",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b21e8d2db5b7338009e4a4c8ed85a39f9eba8beb"
        },
        "date": 1686882930364,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30703,
            "range": "±6.19%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31580,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31287,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30508,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24263,
            "range": "±11.62%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "972c6823551cebd5ca3a3c27eed26091208e9040",
          "message": "Monorepo: Vitest Test Transition / ESM Part 2 (#2764)\n\n* RLP: Switch Tape -> Vitest, add dependencies, remove Karma config\n\n* Rebuild package-lock.json\n\n* (Hopefully) fix coverage\n\n* RLP: update import file path references\n\n* RLP: switch to type module in package.json, fix linter (explcitly switch to cjs)\n\n* Util: tape -> vitest\n\n* Util: add internal .js file references\n\n* Monorepo: renamed other .eslintrc.js files to .eslintrc.cjs\n\n* Util: adjust external import path references\n\n* ESLint config path fix\n\n* Common: tape -> vitest transition\n\n* Common: fix browser tests\n\n* Common: add missing path references\n\n* Common fixes\n\n* Block: Tape -> Vitest test transition (Node tests)\n\n* Migrate blockchain tests to vitest\n\n* Remove karma from blockchain\n\n* Small syntax updates\n\n* Block: require -> import JSON updates\n\n* Block: JSON import related test fixes\n\n* Block: update .js path references\n\n* Blockchain: .js additions\n\n* Blockchain: add more .js path references\n\n* Run browser tests in headless mode\n\n* StateManager: vitest transition part 1\n\n* StateManager: tape -> vitest test transitions (EthersStateManager test not yet working, need EVM transition first)\n\n* Remove require() from ESM test\n\n* StateManager: update lru-cache dependency from v7 -> v9\n\n* StateManager: more .js file additions\n\n* Add browser config for vitest in block\n\n* Tx: tape -> vitest test transition\n\n* Tx: adopt tx test runner\n\n* Tx: JSON require -> import\n\n* Tx: fixes\n\n* Tx: add .js path references\n\n* Rebuild package-lock.json\n\n* migrate wallet to esm/vitest\n\n* move devp2p to esm/vitest\n\n* Fix port in use errors in tests\n\n* ESM/Vitest Transition: add Trie and EVM (#2783)\n\n* Trie: tape -> vitest test transition\r\n\r\n* Trie: .js file path additions\r\n\r\n* EVM: tape -> vitest transition\r\n\r\n* EVM: .js path reference additions\r\n\r\n* Fix ethers state manager tests\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\n\n* Fix typo\n\n* Wrap async tests in promises so vitest waits for them to finish\n\n* Various lint fixes\n\n* VM: tape -> vitest transition (API tests)\n\n* VM: keep Blockchain/State tests on Tape for now\n\n* VM: run Blockchain/State tests on CJS dist folder\n\n* make most devp2p tests async\n\n* Vitest/ESM: VM File Path Additions and Ethash Transition (#2786)\n\n* VM: fix linting\r\n\r\n* VM: add .js path references\r\n\r\n* Ethash: tape -> vitest transition\r\n\r\n* Ethash: ad .js file path references\n\n* Wrap runBlock/runTx in describe\n\n* turn off vm browser tests in ci\n\n* Fix examples CI\n\n* Fix wallet/ethash CI work\n\n* Adjust dpt setup\n\n* Catch addpeer errors silently\n\n* Make trie/vm type module\n\n* fix vm examples\n\n* set higher timeout\n\n* revert vm module type\n\n* Fix Util tests\n\n* Etash: take timeout from script command (60000)\n\n* Etash test timeout adjustments\n\n* Etash timeout adjustment\n\n---------\n\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-16T06:56:05-04:00",
          "tree_id": "60941f7968baa31b6ef1bd5f8af53b4a932af3a2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/972c6823551cebd5ca3a3c27eed26091208e9040"
        },
        "date": 1686913232408,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25695,
            "range": "±5.72%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26130,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26582,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26101,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24808,
            "range": "±3.99%",
            "unit": "ops/sec",
            "extra": "81 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d645cd2a86f64416f443e62a59892554f0b546d3",
          "message": "devp2p: file extensions (#2789)",
          "timestamp": "2023-06-16T22:42:39-04:00",
          "tree_id": "e100fe716cce476a0f9b68b1dc79fe69e1858b7f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d645cd2a86f64416f443e62a59892554f0b546d3"
        },
        "date": 1686970000278,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30688,
            "range": "±5.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30863,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30602,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30481,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25248,
            "range": "±10.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6100ca07a61d06b55173adc9b861a6fbaf336b6f",
          "message": "util: improve bytes jsdocs and rename intToHex to intToPrefixedHexString (#2791)\n\n* util: improve jsdocs and rename intToHex to intToPrefixedHexString\n\n* monorepo: intToHex -> intoToPrefixedHexString\n\n* tx: remove file accidentally committed",
          "timestamp": "2023-06-17T06:51:39-04:00",
          "tree_id": "73bb4ebce597bab15174a9e9cd58857c97737389",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6100ca07a61d06b55173adc9b861a6fbaf336b6f"
        },
        "date": 1686999395645,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25847,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26272,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26044,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25556,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25202,
            "range": "±3.45%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b71b3d4ae81dadf32160cd67e621e6260e1d2985",
          "message": "wallet: remove type/node devdependency (#2793)\n\n* wallet: remove type/node devdependency\n\n* wallet: remove tape script",
          "timestamp": "2023-06-17T22:22:31-04:00",
          "tree_id": "9d3245616d7ba95f450b7c63521c26e9e11821fa",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b71b3d4ae81dadf32160cd67e621e6260e1d2985"
        },
        "date": 1687055274018,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16796,
            "range": "±7.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17836,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16048,
            "range": "±7.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17926,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16663,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b044028a4e50b976ed3da3446ffda34c2ded35a",
          "message": "monorepo: remove tape scripts (#2794)",
          "timestamp": "2023-06-18T11:59:31-04:00",
          "tree_id": "3da7b02cf21eefb5a74e14a77cad9f454c3326bc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9b044028a4e50b976ed3da3446ffda34c2ded35a"
        },
        "date": 1687104204543,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30937,
            "range": "±6.55%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31371,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30706,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 30457,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24784,
            "range": "±10.40%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4146f58af854fc31f528fd3252e0a5baacd19b94",
          "message": "util: Rename mapdb copy function (#2795)\n\n* Rename copy function to shallowCopy\n\n* Add test for shallowCopy",
          "timestamp": "2023-06-18T17:06:33-04:00",
          "tree_id": "bcef1d36cef9dcb474c4b237a14208f14f950309",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4146f58af854fc31f528fd3252e0a5baacd19b94"
        },
        "date": 1687123554073,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32834,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32782,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29881,
            "range": "±7.29%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 31882,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 31043,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "89 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51323d73a7871b86e3b1a93811499dd5ac5c97a4",
          "message": "util: Add tests for blob helpers (#2796)",
          "timestamp": "2023-06-18T18:56:31-04:00",
          "tree_id": "464968b2732554af3c553d2371f8d144ffa10596",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/51323d73a7871b86e3b1a93811499dd5ac5c97a4"
        },
        "date": 1687129284601,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 26419,
            "range": "±5.50%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26986,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 26813,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26353,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24587,
            "range": "±7.22%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd4087ad2aec85580750e4748ce4b3a6a2b32af",
          "message": "genesis: Extract network genesis states into a separate genesis package (#2768)\n\n* genesis: Extract network genesis states into a separate genesis package\r\n\r\nmove the stats json\r\n\r\ngenesis working build\r\n\r\nbuild and working\r\n\r\nlint\r\n\r\ncleanup\r\n\r\nrefactor\r\n\r\nfix build\r\n\r\nadd spec coverage\r\n\r\nfix tests\r\n\r\nenhance coverage\r\n\r\nfix\r\n\r\nadd spec\r\n\r\n* rebase fixes\r\n\r\n* bring test uptodate with new framework\r\n\r\n* fix spec",
          "timestamp": "2023-06-19T10:19:22+02:00",
          "tree_id": "aa04bb43073deaa3ce0728ed335d00d40d56d2db",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2fd4087ad2aec85580750e4748ce4b3a6a2b32af"
        },
        "date": 1687163004346,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32399,
            "range": "±5.36%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32433,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28927,
            "range": "±8.33%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 31891,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30723,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf46928a9a52133732a0fdd9fb22e65dcf21e4d",
          "message": "Common, Block, VM: Unify and Refactor getHardforkBy Options (#2798)\n\n* Common: getHardforkByBlockNumber() -> getHardforkBy(), adopt tests\n\n* Common: setHardforkByBlockNumber() -> setHardforkBy(), reintroduce BigIntLike\n\n* Fixes\n\n* Fix client test",
          "timestamp": "2023-06-19T10:49:48-04:00",
          "tree_id": "484d02ccacc45c5083cc5ee795de7ed82313395b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3bf46928a9a52133732a0fdd9fb22e65dcf21e4d"
        },
        "date": 1687186435080,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30103,
            "range": "±6.38%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30911,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30058,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25176,
            "range": "±10.46%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29105,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df8d8d7077eaff7408a6cde510463a4cf3b367e5",
          "message": "Block, VM: Unify hardforkBy Options (#2800)\n\n* Block: hardforkByBlockNumber, hardforkByTTD -> setHardfork option\r\n\r\n* VM: hardforkByBlockNumber, hardforkByTTD -> setHardfork option (constructor and runBlock())\r\n\r\n* Block, VM: adopt hardforkByBlockNumber, hardforkByTTD usages in other libraries\r\n\r\n* blockchain: fix test\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: acolytec3 <konjou@gmail.com>\r\n\r\n* vm/block: lint\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-20T11:23:14+02:00",
          "tree_id": "f3cb43d5bf8679284f8676f53b8f5bb3ffcf0833",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/df8d8d7077eaff7408a6cde510463a4cf3b367e5"
        },
        "date": 1687253431244,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 34027,
            "range": "±4.53%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31030,
            "range": "±7.21%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 33641,
            "range": "±2.30%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 32768,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 32005,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d89b9762249c3ba2ea86ff050b83614cedd435b2",
          "message": "Fix npm run test:API script (#2802)",
          "timestamp": "2023-06-20T10:26:30-04:00",
          "tree_id": "6eb04f7268d7d94357aaa1484d14f66ddfa8df14",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d89b9762249c3ba2ea86ff050b83614cedd435b2"
        },
        "date": 1687271841128,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31833,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32318,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31953,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 31158,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25418,
            "range": "±10.96%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc29db4ea3a3b854ee82c8176689a180c7f0ca1",
          "message": "Add extensions for new `util` file (#2803)",
          "timestamp": "2023-06-21T11:34:10+02:00",
          "tree_id": "40444a6384985b429cb4a0207ae045ff03b5c753",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5bc29db4ea3a3b854ee82c8176689a180c7f0ca1"
        },
        "date": 1687340412090,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32955,
            "range": "±4.79%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32709,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29557,
            "range": "±7.95%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 31976,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 31104,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13403c56235f1bae1db26e22586970635479758e",
          "message": "Implement EIP6780: SELFDESTRUCT only in same transaction (v2) (#2771)\n\n* common/vm/evm: add eip6780\r\n\r\n* vm: add test\r\n\r\n* vm/statemanager: buffer->uint8array + lint\r\n\r\n* fix test\r\n\r\n* vm: fix eip6780 tests + lint\r\n\r\n* vm: add 6780 test comment\r\n\r\n* vm: update eip6780 tests to vitest\r\n\r\n* move from object to set\r\n\r\n---------\r\n\r\nCo-authored-by: harkamal <gajinder@g11.in>",
          "timestamp": "2023-06-21T15:04:28+02:00",
          "tree_id": "e0037dbeb366d2844e62e9e264d40e543e6f631a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/13403c56235f1bae1db26e22586970635479758e"
        },
        "date": 1687353066809,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18545,
            "range": "±5.09%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19320,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19109,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18663,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18911,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "005595cca658369730fa1015795fe6b626464028",
          "message": "Add json type assertions to ESM post build fixes (#2805)",
          "timestamp": "2023-06-21T16:43:36+02:00",
          "tree_id": "aa1d9e3809ec240a60f4b351fdfe70bc28ecdee3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/005595cca658369730fa1015795fe6b626464028"
        },
        "date": 1687358931009,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18794,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19286,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19156,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19476,
            "range": "±3.80%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16789,
            "range": "±11.29%",
            "unit": "ops/sec",
            "extra": "67 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a37f51faf5d3d9cec4728576723ad7ea61736dab",
          "message": "Monorepo: Update lru-cache dependencies (ESM) / Switch Browser Test Provider (#2804)\n\n* StateManager: update lru-cache from v9 to v10 (seamless)\r\n\r\n* Trie: update lru-cache from v7 to v9, added undefined/null @ts-ignore and comment\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Trie: replace @ts-ignore by any\r\n\r\n* Util: fix browser tests (JSON import update)\r\n\r\n* Monorepo: add browser CI workflow run (temporary or permanent, TBD)\r\n\r\n* Add possibility to skip browser test files, excluding transactionRunner.spec.ts and eip4844.spec.ts for tx\r\n\r\n* Monorepo: update vitest from 0.32.0 -> 0.32.2, switched to playwright browser test provider, removed webdriverio\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Update packages to playwright test provider, updated browser workflow file\r\n\r\n* Add install step for playwright dependencies in ci\r\n\r\n* set isolate flag\r\n\r\n* Exclude account/address as these are failing\r\n\r\n* Add browser comment\r\n\r\n* Remove lint command\r\n\r\n* Remove util from browser tests for now\r\n\r\n* disable util, enable common\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-06-21T14:02:58-04:00",
          "tree_id": "3d978a108e114f34e0accba084343e4854df421b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a37f51faf5d3d9cec4728576723ad7ea61736dab"
        },
        "date": 1687370891985,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18380,
            "range": "±6.41%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18681,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18278,
            "range": "±3.11%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18734,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18316,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e785fa79d0cca07ebf4654965eec09149561cdc",
          "message": "VM/EVM: move selfdestruct type to set (#2806)\n\n* vm/evm: move selfdestruct type to set\r\n\r\n* evm: selfdestruct updates\r\n\r\n* vm: fix test runner\r\n\r\n* vm: fix setting hardfork correctly",
          "timestamp": "2023-06-22T22:49:02+05:30",
          "tree_id": "54f9e61e2a12b97e68c898bfe5f9accfbf44a955",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2e785fa79d0cca07ebf4654965eec09149561cdc"
        },
        "date": 1687454736641,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32192,
            "range": "±6.16%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32393,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 32252,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26572,
            "range": "±10.21%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30761,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c1c835d993fdf4d1d538ff6777daa1ad7610d7d",
          "message": "EVM: move KZG precompile (#2811)\n\n* evm: move kzg-precompile, add multiple precompiles at same address support\r\n\r\n* evm: move bls precompiles\r\nevm: cleanup precompile getter\r\n\r\n* Export precompileAvailability from evm/precompiles/index.ts\r\n\r\n* evm: precompiles update export name\r\n\r\n---------\r\n\r\nCo-authored-by: CedarMist <134699267+CedarMist@users.noreply.github.com>",
          "timestamp": "2023-06-22T20:43:21+02:00",
          "tree_id": "086f145185d6672158c3d805ac58c0b1d8554195",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3c1c835d993fdf4d1d538ff6777daa1ad7610d7d"
        },
        "date": 1687460945922,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32378,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32691,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29204,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 31935,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 31184,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0282e3d02bd5d3fbd1f8ea0a1afe7a2d9440763",
          "message": "Monorepo: More LRU updates and ESM Fixes (#2809)\n\n* GitHub Actions browser workflow file fix\r\n\r\n* Fix yaml file\r\n\r\n* Util: switch to type commonjs for main package.json, skip provider tests, re-add to browser CI run\r\n\r\n* Common: switch to type commonjs in package.json\r\n\r\n* Tx: switch to type commonjs in package.json\r\n\r\n* Trie: switch to type commonjs in package.json, require fixes, skip stream.spec.ts, activate in browser CI workflow\r\n\r\n* Add missing import path\r\n\r\n* Bring back webdriverio for additional browser testing flexibility\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Block: fixes and re-add to browser CI workflow\r\n\r\n* Blockchain: fixes\r\n\r\n* Blockchain: update LRU cache from v7 to v10\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Blockchain: move Consensus interface to types.ts (fixes Blockchain test run so might be something generally quirky and generally can't hurt anyhow)\r\n\r\n* Genesis: require -> import (only temporary, will refactored anyhow, then: no central JSON-distribution-file)\r\n\r\n* Blockchain: reactivate browser test CI workflow\r\n\r\n* Wallet fixes\r\n\r\n* Wallet: update uuid from v8 to v9, require -> import, added @types/uuid\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Wallet: move main source to dedicated file, index.ts -> wallet.ts\r\n\r\n* Wallet: rework Wallet to have its own wallet.ts file and a distributing index.ts file\r\n\r\n* Wallet: add vitest.config.browser.ts, exclude index.spec.ts, add to CI browser test workflow\r\n\r\n* StateManager: switch type to commonjs in package.json, add vitest.config.browser.ts file, exlude two failing test files, activate CI browser test workflow\r\n\r\n* Util: test other browser test provider and browser in CI\r\n\r\n* Do not cancel browser workflow in progress to see all results\r\n\r\n* Partially switch back to (default) webdriverio provider, remove fail-fast from browser CI workflow, other fixes\r\n\r\n* Update crc dep\r\n\r\n* Remove sed from tsbuild\r\n\r\n* Trie: remove src/trie subfolder\r\n\r\n* Trie: adopt paths to new structure\r\n\r\n* Fix trie export\r\n\r\n* Switch genesisStates to js and migrate tape to vitest\r\n\r\n* Merge remote-tracking branch 'origin/master' into more-lru-updates-and-esm-fixes\r\n\r\n* fix trie test again\r\n\r\n* Remove broken karma test run\r\n\r\n* Remove karma tsconfig\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: acolytec3 <konjou@gmail.com>",
          "timestamp": "2023-06-22T16:01:17-04:00",
          "tree_id": "d994478459671f3841f8e31c89618978b4697679",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e0282e3d02bd5d3fbd1f8ea0a1afe7a2d9440763"
        },
        "date": 1687466367470,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32454,
            "range": "±5.58%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32932,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 32323,
            "range": "±2.79%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27252,
            "range": "±9.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 31198,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "konjou@gmail.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91f7c9d4986c9214a201976f18e2e84d6bc479e1",
          "message": "Genesis cleanup (#2815)\n\n* Cleanup genesis imports/types\r\n\r\n* ts config cleanup",
          "timestamp": "2023-06-23T09:54:25+02:00",
          "tree_id": "31f0feee9b5b506610e124d984005783b40b7b6c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/91f7c9d4986c9214a201976f18e2e84d6bc479e1"
        },
        "date": 1687507151479,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 26959,
            "range": "±8.03%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 27398,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 27459,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26670,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24573,
            "range": "±8.61%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c51d81ee8b0d500677fc9492430ae05170dd3960",
          "message": "tx: simplify validate methods (#2792)\n\n* tx: remove validate method and add isValid and getValidationErrors\r\n\r\n* tx: update usage of validate()\r\n\r\n* vm: update usage of tx.validate()\r\n\r\n* block: update usage of tx.validate() and unify validation method naming pattern\r\n\r\n* devp2p: update usage of validation methods\r\n\r\n* block: add missing await\r\n\r\n* block: fix tests\r\n\r\n* tx: split getMessageToSign into two methods\r\n\r\n* tx: split getMessageToSign into two methods\r\n\r\n* tx: update tx tests\r\n\r\n* tx: update docs\r\n\r\n* tx: refactor isValid logic\r\n\r\n* block: refactor transactionsAreValid logic\r\n\r\n* client: fix test\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-06-23T10:28:26+02:00",
          "tree_id": "b615c8d5f4bb70ec3bd2cd4dd9ab26aca489f67f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c51d81ee8b0d500677fc9492430ae05170dd3960"
        },
        "date": 1687509161694,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32232,
            "range": "±4.88%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 32353,
            "range": "±2.80%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31945,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26540,
            "range": "±10.90%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 30277,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      }
    ]
  }
}