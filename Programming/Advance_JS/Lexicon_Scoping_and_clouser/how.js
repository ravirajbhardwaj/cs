let a = 10;
console.log(this);
let b = 5;

function addNum(numOne, numTwo) {
  console.log(addNum.arguments);
  let total = numOne + numTwo;
  return total;
}

console.log(a);
console.log(b);

let resultOne = addNum(a, b);

let resultTwo = addNum(2, 3);

console.log(resultOne);
console.log(resultTwo);
