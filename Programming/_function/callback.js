function greet(name, callback) {
  console.log(`Hi, ${name}`);
  callback();
}

function sayBye() {
  console.log("GoodBye!");
}

greet("Ravi", sayBye);
