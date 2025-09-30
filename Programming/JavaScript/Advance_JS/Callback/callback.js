// JavaScript host environments aapko kai functions provide karte hai jo asynchronous actions ko schedule karne mein madad karte hai.
// Matlab, aisa actions jo hum abhi start karte hai, lekin wo baad mein complete hote hai.

// Only return Even number
function filter(numbers) {
  let result = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }
}

function isOdd(number) {
  return number % 2 != 0;
}

function isEven(number) {
  return number % 2 == 0;
}

function filter(numbers, fn) {
  let result = [];
  for (const number of numbers) {
    if (fn(number)) {
      result.push(number);
    }
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));

function filter(numbers, callback) {
  let result = [];
  for (const number of numbers) {
    if (callback(number)) {
      result.push(number);
    }
  }
  return result;
}

let even = filter(numbers, (number) => {
  return number % 2 == 0;
});

let odd = filter(numbers, (number) => {
  return number % 2 != 0;
});

console.log("Even", even);
console.log("Odd", odd);

// There are two types of callbacks: synchronous and asynchronous callbacks.

// what is callback function

setTimeout(function timer() {
  console.log("Timer after 2s");
}, 2000);

function x(cb) {
  console.log("x");
  cb();
}

x(function y() {
  console.log("y");
});

function attachEventListeners() {
  let count = 0;
  const myBtn = document.getElementById("myBtn");
  console.log(myBtn);
  myBtn.addEventListener("click", () => {
    console.log("Button", ++count);
  });
}

attachEventListeners();
