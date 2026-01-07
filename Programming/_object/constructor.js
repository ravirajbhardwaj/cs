function User(name, email) {
  this.name = name;
  this.emial = email;

  // return { haha: "Chutyia banya tumhara" };
}

const cutyia = new User("Ravi", "ravi@gmail.com").haha;

console.log(typeof new User());

function User(name) {
  // this = {}  -> job bhi is function ko call krega usme ya assign krna hai  (automatic)
  if (!new.target) {
    return new User(name);
  }
  this.name = name;

  // return this   -> automatic
}

const secondUser = User("Ravi");
console.log(secondUser);

let arr = Array(1, 2, "he");



function Student(name, age) {
  if (!new.target) {
    return new Student(name);
  }
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

console.log(Student("Sunil"));

let user = new Student("Ravi", 19);
console.log(user.isAdmin);

let user2 = new Student("Sonu", 20);

// when new ka baad vala function execute hota hai toh

// Ek naya empty object create hota hai aur this usko point karta hai.
// Function body execute hoti hai aur this me naye properties add hote hain.
// Function implicitly this return karta hai.

console.log(user2);

let string = "ravi";
console.log(typeof string);

let calculator = {
  // ... your code ...
};

calculator.a = 10;
calculator.b = 20;

calculator.read = function () {
  console.log(this.a, this.b);
};

calculator.sum = function () {
  let sum = this.a + this.b;
  return sum;
};

calculator.mul = function () {
  let mul = this.a * this.b;
  return mul;
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
