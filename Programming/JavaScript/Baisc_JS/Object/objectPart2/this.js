let person = {
  name: "Ravi",
  age: 19,
  sayHi() {
    console.log(this.name);
  },
};

// person.sayHi();

let user = { name: "Ravi", age: 19 };
let user2 = { name: "sonu", age: 19 };

function sayHello() {
  console.log("Hello " + this.name);
}

user.f = sayHello;
user2.f = sayHello;

// user2.f();

let person2 = {
  name: "Sonu",
  age: 19,
  sayHi() {
    let arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

person2.sayHi();
