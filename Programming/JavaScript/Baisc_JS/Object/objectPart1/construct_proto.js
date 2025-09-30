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
