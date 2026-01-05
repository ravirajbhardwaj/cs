// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (percent) {
  if (percent > 0) {
    this.salary += (percent * this.salary) / 100;
  }
  throw new Error("Give Positive Number");
};

const employee = new Employee("Ravi", "SDE-I", 100);

console.log(employee.applyBonus(100));
console.log(employee.salary);
