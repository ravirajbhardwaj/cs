// object create in two ways

// const user = new Object(); ->  "object constructor" syntax
// const user = {} -> "object literal" syntax

// key -> String or Symbol

let user = {
  name: "Ravi",
  age: 20,
  "is Paid": true, // multiword property name must be quoted
};

// console.log(user["is Paid"]);

let key = "name";
// console.log(user[key]);

// you can not use dot notation similar way

let dotKey = "age";
// console.log(user.dotKey); // undefind

// computed properies

const WHITE = "fff";

let user2 = {
  [WHITE]: "white", // fff -> "white"
};

console.log(user2.fff);

let sym = Symbol("uniqueKey");

let objWithKey = {
  name: "Ravi",
  [sym]: 1,
};

for (const key in objWithKey) {
  console.log(objWithKey[key]);
}

for (const key in objWithKey) {
  if (Object.prototype.hasOwnProperty.call(objWithKey, sym)) {
    const element = objWithKey[key];
    console.log(element);
  }
}

let names = [
  "Ravi",
  "Sonu",
  "Sunil",
  "Mukul",
  "Ashi",
  "Modi",
  "Yogi",
];

let [myName, myBrother1, myBrother2, myBrother3, myBesti, ...faltu] = names;

console.log(faltu);
console.log(myBrother1);
console.log(myBrother2);
console.log(myBrother3);
console.log(myBesti);

// Default Values
let num = [1, 2];
const [numOne, numTwo, numThree = 3] = num;
console.log(numThree);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// let { title, width, height } = options;
// console.log(title, width, height);

// remaining with colon
let { title: t, width: w, height: h } = options;
console.log(t, w, h);

// nesting
let optionsTwo = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

const {
  size: { width, height },
  items: [cake, donut],
  extra,
} = optionsTwo;

console.log(width);
console.log(height);
console.log(cake);
console.log(donut);
console.log(extra);

function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
} = {}) {
  console.log(`${title} ${width} ${height}`);
  console.log(items);
}

showMenu({ title: "My Menu", items: ["Item1", "Item2"] });


// ---------------------------------------------------------------------------------------------
// Kya objects ordered hote hain? 

// Let's find ans

// in codes all key is integer properties hai 
// integer properties -> Yahan "integer property" ka matlab hai 
// ek string jo integer mein convert ho sakti hai aur wapas string mein convert hone par same rahti hai.
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
}

for (const code in codes) {
  console.log(codes[code]);
}

/* output 
USA
Switzerland
Great Britain
Germany
*/

// let user = {
//   name: "Ravi", // non-integer properties
//   age: 19,
//   "0": "zero" // integer properties
// }

// user.isPaid = true

// for (const key in user) {
//   console.log(user[key])
// }

/* 
zero
Ravi
19
true
*/

// key -> non-integer properties means creation order mein list hoti hain

let newUser = {
  name: "Ravi", // non-integer properties
  age: 19,
}

// Array is object

let numbers = [1, 2, 3, 4, 5];

// numbers = { // key -> ya toh string ya symbol (ya mujhe nhi pta)
//   "0": 1, // integer property ->
//   "1": 2,
//   "2": 3,
//   "3": 4,
//   "4": 5,
//   "5":
// }

let userKey = 6;
numbers[userKey] = "Ravi"; // add same

// for(const propName in numbers) {
//   console.log(numbers[propName])
// }

// console.log(numbers.length)

for (let i = 0; i < numbers.length; i++) {

  console.log(numbers[i]);
}

// new.target and new keyword

function Person(name) {
  // this = {}  -> job bhi is function ko call krega usme ya assign krna hai  (automatic)
  if (!new.target) {
    return new Person(name);
  }
  this.name = name;

  // return this   -> automatic
}

// --- origin --
function Object() {
  // Base object constructor
}
Object.prototype = {}; // The base prototype object
Object.__proto__ = Function.prototype; // Because Object itself is a function

function Array() {
  // Array constructor
}
Array.prototype = Object.create(Object.prototype); // Inherit from Object
Array.__proto__ = Function.prototype; // Because Array is also a function

function String() {
  // String constructor
}
String.prototype = Object.create(Object.prototype);
String.__proto__ = Function.prototype;

function Number() {
  // Number constructor
}
Number.prototype = Object.create(Object.prototype);
Number.__proto__ = Function.prototype;

// ------- Example Usage -------

// Parent Constructor
const Phone = function (brand, name) {
  this.brand = brand;
  this.name = name;
};

// Parent Method
Phone.prototype.showDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.name}`);
};

// Child Constructor
const Smartphone = function (brand, name, os) {
  // Inherit properties from Phone
  Phone.call(this, brand, name); // 👈 Call parent constructor
  this.os = os; // Add new property
};

Phone.prototype.getos = function () {
  console.log(`OS: ${this.os}`);
};

// Set up inheritance (Link prototypes)
Smartphone.prototype = Object.create(Phone.prototype); // 👈 Prototype chain
Smartphone.prototype.constructor = Smartphone; // Fix constructor reference

// Override showDetails method
Smartphone.prototype.showDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.name}, OS: ${this.os}`);
};

// Create instances
let phone1 = new Phone("Samsung", "M21");
let smartphone1 = new Smartphone("Apple", "iPhone 15", "iOS");

// Test methods
phone1.showDetails(); // Brand: Samsung, Model: M21
smartphone1.showDetails(); // Brand: Apple, Model: iPhone 15, OS: iOS

smartphone1.getos();

// ----------------------------------------------------------------------------------------------

// Object methods: keys, values, entries, fromEntries, hasOwn, assign, freeze, 
// create, setPrototypeOf, getPrototypeOf

let teacher = {
  name: "Ravi",
  age: 19,
  gender: {
    isMale: true
  }
}

let userProperties = {
  height: 6,
  weight: 50,
  isMale: true,
  name: "Sonu" // overwrite user.name
}

// Object.assign -> merge multiple values into one 
//  && spread syntax -> const clone = {...user} // Yeh sirf top-level properties copy karta hai.

// Object.assign(user, userProperties)

// console.log(user)

const clone = Object.assign({}, user)
console.log(clone)


console.log(user.gender == clone.gender) //  true, same object -> means location is same

user.gender.isMale = false

console.log(user.gender, clone.gender)

const laptop = {
  name: "Asus TUF",
  brand: "asus",
  color: ["balck", "white"],
  ram: 8,
  ssd: 456
}

// const laptop2 = {
//   name: laptop.name,
//   brand: laptop.brand,
//   color: laptop.color,
//   ram: laptop.ram,
//   ssd: laptop.ssd
// }

const laptop2 = {
  ...laptop,
  ...laptop.color
}

laptop.color[0] = ""

console.log(laptop)
console.log(laptop2)

let users = {
  name: "Ravi",
  age: 30,
};

let userTwo = {
  name: "Sonu"
}

// top level clone -> same as "{...users}, Object.assign({}, users)"
for (let key in users) {
  // console.log(`key ${key}`)
  userTwo[key] = users[key]
}

// userTwo.timeLog = "M"

console.log(users)
console.log(userTwo)

// Shallow Clone Example
const person = { name: "Alice", hobbies: ["reading", "gaming"] };
const shallowClone = { ...person };
shallowClone.hobbies.push("cooking");

person.name = "Ravi";

console.log(person);
console.log(shallowClone);

// Destructuring with Renaming
const course = {
  name: "JavaScript",
  courseInstructure: "Hitesh",
};

const { courseInstructure: instructre } = course;

console.log(instructre);

let student = {
  name: "John",
  age: 30,
  prop: {
    height: 170,
    weight: 50
  }
};

let deepClone = {}

for (let key in student) {
  if (typeof student[key] == 'object') {
    let propName = student[key]
    for (let key in propName) {

    }
  }
  deepClone[key] = student[key]
}

console.log(deepClone.prop.height == student.prop.height)

const admin = {
  name: "Ravi",
  age: 5,
  prop: {
    height: 12,
    weight: 100
  }
}

// const clone = Object.assign({}, admin)
// console.log(admin.prop == clone.prop) // true because shallow copy

const structClone = structuredClone(admin)
console.log(admin.prop == structClone.prop) // false because deep copy

let person = {
  name: "Ravi",
  age: 19,
  sayHi() {
    console.log(person.name);
  },
};

let person2 = person;

person = null;

console.log(person2.sayHi());

// ------- Circular Reference Example -------

let personOne = {
  name: "Ravi"
}

let personTwo = {
  name: "Ravi",
}

personTwo.me = personOne
personOne.me = personTwo

console.log(personOne)

// structuredClone(personOne) // Error: Converting circular structure to JSON
// To handle circular references, a custom cloning function is needed.