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
