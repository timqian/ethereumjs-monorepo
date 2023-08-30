import { Stack } from '../dist/cjs/stack'

const bn0 = BigInt(0)

function profile(
  tag: string,
  fn: (stack: Stack) => void,
  post: (stack: Stack) => void,
  stack: Stack,
  runs: number = 1e7
) {
  let timer = 0
  for (let i = 0; i < runs; i++) {
    const start = performance.now()
    fn(stack)
    timer += performance.now() - start
    post(stack)
  }
  const s = timer / 1000
  //console.log(`${tag}: Took ${s}s, per call: ${(s * 1e3) / runs} ms, calls: ${runs}`)
  const tagPadded = (tag + ': ').padEnd(40, ' ')
  console.log(`${tagPadded}Took ${s}s`)
}

function initStack(size: number) {
  const stack = new Stack()
  for (let i = 0; i < size; i++) {
    stack.push(bn0)
  }
  return stack
}

// PUSH
function _testPush(tag: string, stackItems: number) {
  const stack = initStack(stackItems)

  const post = (stack: Stack) => {
    stack.pop()
  }
  const fn = (stack: Stack) => {
    stack.push(bn0)
  }

  profile(tag, fn, post, stack, 1e7)
}

function testPush() {
  _testPush('push on empty stack', 0)
  _testPush('push on almost-full-stack', 1023)
}

// POP
function _testPop(tag: string, stackItems: number) {
  const stack = initStack(stackItems)

  const fn = (stack: Stack) => {
    stack.pop()
  }
  const post = (stack: Stack) => {
    stack.push(bn0)
  }

  profile(tag, fn, post, stack, 1e7)
}

function testPop() {
  _testPop('pop on empty stack', 1)
  _testPop('pop on full-stack', 1024)
}

// POPN
function _testPopN(tag: string, stackItems: number, popItems: number) {
  const stack = initStack(stackItems)

  const fn = (stack: Stack) => {
    stack.popN(popItems)
  }
  const post = (stack: Stack) => {
    for (let i = 0; i < popItems; i++) {
      stack.push(bn0)
    }
  }

  profile(tag, fn, post, stack, 1e7)
}

function testPopN() {
  _testPopN('popN 1 on stack size 1', 1, 1)
  _testPopN('popN 1 on full-stack', 1024, 1)
  _testPopN('popN 8 on stack size 8', 8, 8)
  _testPopN('popN 8 on full-stack', 1024, 8)
}

// PEEK
function _testPeek(tag: string, stackItems: number, peekItems: number) {
  const stack = initStack(stackItems)

  const fn = (stack: Stack) => {
    stack.peek(peekItems)
  }
  const post = (stack: Stack) => {}

  profile(tag, fn, post, stack, 1e7)
}

function testPeek() {
  _testPeek('peek 1 on stack size 1', 1, 1)
  _testPeek('peek 1 on full-stack', 1024, 1)
  _testPeek('peek 8 on stack size 8', 8, 8)
  _testPeek('peek 8 on full-stack', 1024, 8)
}

// SWAP
function _testSwap(tag: string, stackItems: number, swapItem: number) {
  const stack = initStack(stackItems)

  const fn = (stack: Stack) => {
    stack.swap(swapItem)
  }
  const post = (stack: Stack) => {}

  profile(tag, fn, post, stack, 1e7)
}

function testSwap() {
  _testPeek('swap 1 on stack size 2', 2, 1)
  _testPeek('swap 1 on full-stack', 1024, 1)
  _testPeek('swap 16 on stack size 17', 17, 16)
  _testPeek('swap 16 on full-stack', 1024, 16)
}

// DUP
function _testDup(tag: string, stackItems: number, swapItem: number) {
  const stack = initStack(stackItems)

  const fn = (stack: Stack) => {
    stack.dup(swapItem)
  }
  const post = (stack: Stack) => {
    stack.pop()
  }

  profile(tag, fn, post, stack, 1e7)
}

function testDup() {
  _testDup('dup 1 on stack size 1', 1, 1)
  _testDup('dup 1 on almost-full-stack', 1023, 1)
  _testDup('dup 16 on stack size 16', 16, 16)
  _testDup('dup 16 on almost-full-stack', 1023, 16)
}

function testConstructor() {
  let tmr = 0
  for (let i = 0; i < 1e7; i++) {
    const start = performance.now()
    new Stack()
    tmr += performance.now() - start
  }
  let s = tmr / 1000
  const tag = 'constructor'
  const tagPadded = (tag + ': ').padEnd(40, ' ')
  console.log(`${tagPadded}Took ${s}s`)
}

// Actually run the tests
testPush()
testPop()
testPopN()
testPeek()
testSwap()
testDup()
testConstructor()
