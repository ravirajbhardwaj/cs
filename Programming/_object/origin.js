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

function Person(name, email) {
  this.name = name;
  this.emial = email;

  // return { haha: "Chutyia banya tumhara" };
}

const cutyia = new Person("Ravi", "ravi@gmail.com").haha;

console.log(typeof new Person());

function Person(name) {
  // this = {}  -> job bhi is function ko call krega usme ya assign krna hai  (automatic)
  if (!new.target) {
    return new Person(name);
  }
  this.name = name;

  // return this   -> automatic
}

const secondPerson = Person("Ravi");
console.log(secondPerson);

let arr = Array(1, 2, "he");



function Student(name, age) {
  if (!new.target) {
    return new Student(name);
  }
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

console.log(Student("Sunil"));

let user = new Student("Ravi", 19);
console.log(user.isAdmin);

let user2 = new Student("Sonu", 20);

// when new ka baad vala function execute hota hai toh

// Ek naya empty object create hota hai aur this usko point karta hai.
// Function body execute hoti hai aur this me naye properties add hote hain.
// Function implicitly this return karta hai.

console.log(user2);

let string = "ravi";
console.log(typeof string);

let calculator = {
  // ... your code ...
};

calculator.a = 10;
calculator.b = 20;

calculator.read = function () {
  console.log(this.a, this.b);
};

calculator.sum = function () {
  let sum = this.a + this.b;
  return sum;
};

calculator.mul = function () {
  let mul = this.a * this.b;
  return mul;
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
