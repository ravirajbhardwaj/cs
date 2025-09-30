let count = 0;

function createCounter() {
  count++;
  return count;
}

function change(x) {
  x = 20;
  console.log(x);
}

let z = 100;
change(z);

console.log(z);
