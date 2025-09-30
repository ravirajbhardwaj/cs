const fruits = ["Mango", "Bannana", "Grapes", "Apple"];

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

console.log(fruits.length);

// Core Iteration Methods

// .map() -> har element ko transform kro
// filter() -> condition ke hisab se chalo

// array.filter((currentElement, index, array))

// currentElement -> array ka current element jis par function chal raha hai
// index (optional): current element ka index
// array (optional): poora array jis par map() chalana hai

// return -> naya array har element ke tranformed value

const productPrice = [100, 200, 300];
const discountedPrice = productPrice.map((price, i, arr) => {
  if (arr[i] > 200) {
    return price * 0.8;
  } else {
    return price * 0.9;
  }
});

console.log(discountedPrice);

// real worl userCase of Map

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 16 },
  { name: "Sonu", age: 24 },
  { name: "Ravi", age: 17 },
  { name: "Alice", age: 30 },
];

let adults = users.filter((user) => user.age > 18);
console.log(adults);

const names = users.map((element) => element.name.toUpperCase());
console.log(names);

const prices = [400, 600, 300, 800, 100];

const tea = ["green tea", "ginger tea", "orange tea"];

const orangeTea = tea.filter((e) => e == "orange tea");

console.log(orangeTea);

const expensiveProducts = prices.filter((price) => {
  // console.log(price > 500)
  return price > 500;
});

console.log(expensiveProducts);
const sparseArray = [1, , 3, , 5];

console.log(sparseArray);
const filterArray = sparseArray.filter((e) => e != undefined);

console.log(filterArray);

// map and filter both

const userName = [
  { name: "Ravi", age: 19 },
  { name: "Sonu", age: 24 },
  { name: "Sunil", age: 27 },
];

const adultsName = userName
  .filter((user) => user.age > 18)
  .map((user) => user.name.toUpperCase());

console.log(adultsName);

// reduce() -> ek value mai dalna

// Parameteres:
// accumulator -> woh wo value hai jo har step pa update hoti hai
// currentElement -> array ka current element
// index (optional) -> current element ka index
// array (optional) -> poore array jis pa reduce() chal raha hai

// second parameters -> initialValue
// accumulator ki starting val, agar nhi di gayi hai
// toh array ke phela element accumulator ban jayga

const cart = [100, 200, 300];

const total = cart.reduce((sum, price) => {
  return sum + price;
}, 0);

// har element par ek fucntion chlta hai
// sum = 0, price = 100 -> sum = 0 + price = 100 agar mana yaha pa initialValue nhi di hoti toh sum = 100
// sum = 100 , price = 200 -> sum = 100 + price =  300
// sum = 300 , price = 300 -> sum = 300 + price =  600

// final result = 600
console.log(total);

const userCart = [
  { product: "lap", price: 100 },
  { product: "watch", price: 20 },
  { product: "pc", price: 1000 },
];

const total2 = userCart.reduce((total, currentValue) => {
  return total + currentValue.price;
}, {});

console.log(total2);

const fruitsCart = [
  { product: "apple", quantity: 2 },
  { product: "banana", quantity: 3 },
  { product: "apple", quantity: 1 },
];

const totoalQuality = fruitsCart.reduce((acc, items) => {
  if (!acc[items.product]) {
    acc[items.product] = 0;
  }
  acc[items.product] += items.quantity;
  return acc;
}, {});

console.log(totoalQuality);

const studentMarks = [85, 90, 78, 92, 88];

const totalMarks = studentMarks.reduce((acc, val) => {
  return acc + val;
}, 0);

const avg = totalMarks / studentMarks.length;

console.log(avg);

// forEach -> har element pa "Kuch karo"
// return -> undefinded (nothing)

const number = [1, 2, 3, 4, 5, 6];

// number.forEach((num, i, number) => { // avoid
//   number[i] = num * 3
// })  // kyuki ya origrnal array ko change kr deta hai

number.forEach((num, i, number) => console.log(num));

// forEach vs for (slow than for loop)

for (let i = 0; i < number.length; i++) {
  const element = number[i];
  console.log(element);
}

let chaiCourse = [
  { name: "cohor1.0", price: 5000 },
  { name: "javascript DSA", price: 10000 },
];

chaiCourse.forEach((course) => {
  course.price *= 1.1;
});

console.log(chaiCourse);

// Adding/Removing Elements

// push -> array ka end mai joddo | array.push(item1, ..., itemN)
// Parameters -> element to add (comma-seprated)
// return -> new legth of array

let fruit = ["Apple", "Bananna"];

let newLength = fruit.push("Mango", "Grapes"); // return newLength of array

console.log(fruit);
console.log(newLength);

// pop -> array ka end se "hatao"
// no params , return -> remove element (if array is empty -> undefined)

fruit.pop();
console.log(fruit);

// stack Data Struct -> LIFO principle
const stack = [];

stack.push("page1");
stack.push("page2");
stack.push("page3");

const removedVal = stack.pop(); // "page3" last added is first removed

console.log(removedVal);
console.log(stack);

const empty = [];
console.log(empty.pop()); // undefined
console.log(empty);

// concat() -> arrays ko "joddo" -> merge

// params -> array or individual elements (mixed bhi chalega)
// return new array

const arr = [1, 2, 3];

const newArr = arr.concat(stack, 4, 5, 6);
console.log(newArr);

let teas = ["Green Tea", "Orange Tea"];
let teas2 = ["Ginger Tea", "Masala Tea"];
let teas3 = ["Oolong Tea"];

const allTeas = tea.concat(teas2, [1, 2], teas3);

console.log(allTeas);
console.log(teas);
console.log(teas2);

const original = [1, 2];
const copy = original.concat();

const arr3 = [1].concat([1, [2], [3, [4]]]);
console.log(arr3); // as-is add krega not flatten

const helloTea = teas.concat("Hello");
console.log(helloTea);

const cart1 = ["Shoes", "Bag"];
const cart2 = ["Watch", "Sunglasses"];
const specialOffer = ["Free Gift!"];

const megaCart = cart1.concat(cart2, specialOffer);
console.log(megaCart);
