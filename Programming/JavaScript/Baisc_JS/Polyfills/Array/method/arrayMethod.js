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
