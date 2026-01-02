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
