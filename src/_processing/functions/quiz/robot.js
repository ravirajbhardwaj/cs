// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  if (this.batteryLevel > 80) {
    let addVal = 120 - (this.batteryLevel + 20);
    return (this.batteryLevel += addVal);
  }
  return (this.batteryLevel += 20);
};

const robot1 = new Robot("Chiti Robo1", 50);
const robot2 = new Robot("Chiti Robo2", 90);
const robot3 = new Robot("Chiti Robo3", 100);

console.log(robot1.batteryLevel);
console.log(robot1.charge());
console.log(robot1.batteryLevel);

console.log(robot2.batteryLevel);
console.log(robot2.charge());
console.log(robot2.batteryLevel);

console.log(robot3.batteryLevel);
console.log(robot3.charge());
console.log(robot3.batteryLevel);
