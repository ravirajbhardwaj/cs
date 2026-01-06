// slice -> array ka "Hisa" copy karo

// slice(startIndex : index, endIndex: index)

// startIndex -> copy suru krna ka index
// endIndex -> copy rokne krna ka index (exclusive) -> Default (array.length)

// return -> new array with copied elements

const playlist = ["song1", "song2", "song3"];

const topSongs = playlist.slice(0, 2); // 0 se 1
console.log(topSongs);

// object/array refrence copy
const user = [{ name: "Ravi" }, { age: 19 }];

const copiedUser = user.slice();

copiedUser[0].name = "Sonu";

console.log(user[0].name); // change reflect on slice

// clone array

const original = [1, 2, 3];
const copy = original.slice();
original[0] = 2;
console.log(original);
console.log(copy);

// if startIndex neg then -> array.length - startIndex

console.log(original.slice(-2)); // -2 same as 1 // lenght = 3 , 3-2 = 1

const pizza = ["Slice1", "Slice2", "Slice3", "Slice4", "Slice5"];

const myPlate = pizza.slice(0, 3);
console.log(myPlate);

// includes() kya ye array mein hai?
// Perfect for primitive not work on object

// array.includes(seachElement, fromIndex?)

const fruits = ["🍎", "🍌", "🍊"];

console.log(fruits.includes("🍌"));
console.log(fruits.includes("🥹"));

const users = [{ id: 1 }, { id: 2 }];

console.log(user.includes({ id: 1 }));

// handel NaN

const productPrice = [100, NaN, 200, , 400, 200];
console.log(productPrice.includes(NaN)); // true

console.log(productPrice.indexOf(200, 3));
console.log(productPrice.indexOf(NaN)); // always -1

// array.splice -> array main se Elements "Kato ya Jodo"
// array.splice(startIndex, deleteCount, item1, item2)

// startIndex -> jahaan se modify karna shuru karna hai
// deleteCount -> optional - kitne elements delte karna hai
// item1, item2... optional add krna ka liya

// return -> deleted element ka array
// orignal array change hota hai

const todos = ["Task 1", "Task 2", "Task 3"];

// --- cutting
// const deleteTask = todos.splice(0, 2)
// console.log(deleteTask)
// console.log(todos)

// --- pasting
todos.splice(4, 0, "Task 4");
console.log(todos);

// cut + paste

todos.splice(1, 1, "MyTask");

console.log(todos);

// reverse() -> array ko "ulta karo"
const number = [1, 2, 3, 9, 5];

const reverseNumber = number.reverse();

reverseNumber[1] = 4;

console.log(reverseNumber);
console.log(number);

// fill(value, startIndex?, endIndex?)

const board = new Array(8).fill().map(() => new Array(8).fill("◻️"));

console.log(board);

const arr = new Array(3).fill({});
arr[0].name = "Ravi";

console.log(arr);

const sentences = ["Hello Wolrd", "Good Morning"];

const word = sentences.flatMap((e) => e.split(" "));

console.log(word);

const score = 12;
const obj = {};
const array = [];
console.log({} == []);

console.log(Array.isArray(score));
console.log(Array.isArray(word));
console.log(Array.isArray(obj));


// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
