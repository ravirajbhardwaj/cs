// jo bhi code likha hai uska package bna diya

printChai();

function printChai() { // function defination or signature
  console.log("Hello Chai");
}

printChai(); // calling the function
printChai(); // calling the function
printChai(); // calling the function

function bringBrush(itne) {
  console.log(`Hanji, le aaye ${itne} brush`); // printing factory
}

bringBrush(4); // neta ji

// fuction is also treat a value like string, number and etc
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
  console.log(`User name is ${anyobject.name}
    and price is ${anyobject.age}`);
}

handleObject({
  name: "Ravi",
  age: 20,
});

function handleArray(anyArray) {
  return anyArray[0];
}

console.log(handleArray(["Ravi", 21]));

const roundTo = function (n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

// console.log(roundTo(35, 10));

let personOne = {
  name: "Ravi",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let personTwo = {
  name: "Sonu",
};

// const bindFunct = personOne.greet.bind(personOne);
personOne.greet.call(personOne);
// bindFunct();
