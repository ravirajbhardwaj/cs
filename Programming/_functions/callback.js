// High Order Functions (HOF) are functions that meet at least one condition:
// 1 It accepts one or more functions as arguments, OR
// 2 It returns a function as its result

// Callback Functions
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

//                                 callback
function calculate(numOne, numTwo, operation) {
  return operation(numOne, numTwo);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));

// calculate function is a HOF because it takes another function (operation) as an argument.
// The add and subtract functions are callback functions passed to calculate.