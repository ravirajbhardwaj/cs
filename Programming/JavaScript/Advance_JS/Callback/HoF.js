function x() {
  console.log("Hello");
}

function y(x) {
  x();
}

let radius = [3, 6, 9, 12];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

function calculate(radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
}

// map, filter, reduce etc
