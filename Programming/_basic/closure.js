let count = 0;

function createCounter() {
  count++;
  return count;
}

console.log(createCounter())
console.log(createCounter())
console.log(createCounter())

count = 10 // this is global variable manipulation

console.log(createCounter())
console.log(createCounter())

// make closure to protect count variable

function createProtectedCounter() {
  let counter = 0
  return function () {
    return ++counter
  }
}

const protectedCounter = createProtectedCounter()

console.log(protectedCounter())
console.log(protectedCounter())
console.log(protectedCounter())