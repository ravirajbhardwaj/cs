// Functions: Full hoisting with body.
// Var: Hoisting with undefined initialization.
// Let/Const/Class: Hoisting with Temporal Dead Zone (use se pehle ReferenceError).
// Import: Sabse pehle hoisting and load

// function hoisting and var hoisting
console.log(name);
var name = "Ravi";
greet(name);

function greet(name) {
  console.log("Hey", name);
}

// let, const, class [TDZ]

// console.log(age); // TDZ
let age = 19;

// const obj = new Person(); // TDZ mara huwa hai
class Person {}
