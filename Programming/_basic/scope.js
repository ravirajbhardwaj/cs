{
  // Block Scope
  let x = 10;
  console.log(x); // this x is only accessible within this block
}

console.log(x) // Error: x is not defined

// Function Scope
function functionScope() {
  let y = 20;
  console.log(y); // this y is only accessible within this function
}

functionScope();
console.log(y); // Error: y is not defined

// Global Scope
let z = 30;
console.log(z); // this z is accessible anywhere in the code