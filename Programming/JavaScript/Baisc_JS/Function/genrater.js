function* count() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const iter = count();

console.log(iter.next().done);
console.log(iter.next().value);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next().done);

let arr = ["ravi", 2, 3, 4, 5];

function* lazyIter(anyArray) {
  for (let i = 0; i < anyArray.length; i++) {
    yield anyArray[i];
  }
}

const valueOfArray = lazyIter(arr);

console.log(valueOfArray.next().value);
console.log(valueOfArray.next().value);
console.log(valueOfArray.next().value);
console.log(valueOfArray.next().value);
console.log(valueOfArray.next().value);
