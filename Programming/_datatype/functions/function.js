function printChai() { // function defination or signature
  console.log("Hello Chai");
}

printChai(); // calling the function
printChai(); // calling the function
printChai(); // calling the function

//               Parameters
function bringBrush(itne) {
  console.log(`Hanji, le aaye ${itne} brush`);
}

//     Arguments
bringBrush(4); // neta ji

// JavaScript me functions first-class objects hote hain 
// named function expression
const greet = function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
greet()

function addTwo(numOne, numTwo) {
  return numOne + numTwo;
}

const result = addTwo(2, 3);

function calculateCartPrice(val1, vale2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 300, 500, 600, 700));

function handleObject(anyobject) {
  if (Array.isArray(anyobject)) {
    console.log(anyobject[0]);
    return;
  }

  console.log(`User name is ${anyobject.name} and price is ${anyobject.age}`);
}

// ["Ravi", 21], { name: "Ravi", age: 20, }
handleObject({ name: "Ravi", age: 20, });