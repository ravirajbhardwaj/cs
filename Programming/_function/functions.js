// jo bhi code likha hai uska pacakage bna diya

function sayMyName() {
  console.log("R");
  console.log("a");
  console.log("v");
  console.log("i");
}

sayMyName();

function addTwo(a, b) {
  // let result = a + b
  // return result
  return a + b;
}

let result = addTwo(1, 2);

console.log(result);

function calculateCartPrice(val1, vale2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  name: "Ravi",
  age: 19,
};

function handleObject(anyobject) {
  console.log(`User name is ${anyobject.name}
    and price is ${anyobject.age}`);
}

handleObject({
  name: "Sonu",
  age: 20,
});

handleObject(user);

function handleArray(anyArray) {
  return anyArray[0];
}

const num = [1, 2, 3, 4, 5];

console.log(handleArray(num));
console.log(handleArray(["ravi", 19]));

function one() {
  let username = "ravi";
  function two() {
    let website = "google.com";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();

function printChai() {
  console.log("Hello Chai");
}

function bringBrush(itne) {
  console.log(`Hanji, le aaye ${itne} brush`); // Printing ka kaam kr rahi hai
}

function addTwo(numOne, numTwo) {
  return numOne + numTwo;
}

bringBrush(4); // neta ji
printChai();

console.log(addTwo(2, 3));

const makeNoise = function () {
  console.log("Pling!");
};

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


// fuction is also treat a value like string, number and etc

// function defination below

console.log(sayHi());

function sayHi() {
  console.log("Hi")
}

// console.log(sayHi) // type of -> function and typeof sayHi -> [Function: sayHi] 

// function expression below

let name = "Ravi";

let greet = function (name) {
  console.log(name)
}

// console.log(greet) // type of -> function and typeof greet -> [Function: greet]

let func = greet // func ko greet defination ka reference diya gya hai

func()
greet()