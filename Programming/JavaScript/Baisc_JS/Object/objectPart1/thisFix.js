const user = {
  name: "John",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet();
