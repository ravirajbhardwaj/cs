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
