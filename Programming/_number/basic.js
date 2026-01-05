// number, date, math

const score = Number(12.3);
const newscore = Number(12);

console.log(typeof score);

// checks method

console.log(Number.isInteger(score)); // false
console.log(Number.isInteger(newscore)); // true

console.log(Number.isNaN(NaN));

console.log(Number.isFinite(Infinity));

// parse string into floating-point num and integer num

console.log(Number.parseFloat("12.55"));
console.log(Number.parseFloat("12.2badkj"));
console.log(Number.parseFloat("badkj12"));

console.log(typeof Number.parseInt(score)); // 12

// formats number

let num = 10.56789;

console.log(num.toFixed());
console.log(num.toPrecision(2));

console.log(newscore.toString(2)); // convert into binary  -> '1100'
console.log(newscore.toString(8)); // convert into octal -> 14
console.log(newscore.toString(14)); // convert into hex -> c

const PI = Math.PI;

console.log(PI);

let rounded = Math.round(4.56); // based on nearest

console.log(rounded);

console.log(Math.ceil(4.1)); // top
console.log(Math.floor(4.7)); // bottom

const number = [1, 2, 3, 10, 5, 0];

console.log(Math.max(...number));
console.log(Math.min(...number));

console.log(Math.sqrt(25));

console.log(Math.pow(10, 4));
