let person = {
  name: "Ravi",
  age: 19,
  sayHi() {
    console.log(person.name);
  },
};

let person2 = person;

person = null;

console.log(person2.sayHi());
