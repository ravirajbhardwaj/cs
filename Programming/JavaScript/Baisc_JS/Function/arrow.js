const user = {
  username: "ravi",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// const user2 = user;
// user2.welcomeMessage();

// console.log(this);

// function chai() {
//   // let username = "ravi"
//   console.log(this.username);
//   console.log(this);
// }

// chai();

user.sayHi = function hello() {
  const arrow = () => {
    // let user = "Ravi"
    console.log(this.username);
    console.log(this);
  };
  arrow();
};

user.sayHi();

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// automatic return with () and do not write return
const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(2, 4));

const obj = () => ({ user: "Ravi", age: 19 });
const hi = obj();
console.log(hi);
