let obj = {
  personName: "Ravi",
  greet() {
    console.log("Hello", this.personName);
  },
};

console.log("Hi");

setTimeout(obj.greet.bind(obj), 2 * 1000);

console.log("Bye");

// obj.greet();
