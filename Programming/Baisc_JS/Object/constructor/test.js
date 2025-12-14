function User(name) {
  // this = {}  -> job bhi is function ko call krega usme ya assign krna hai  (automatic)
  if (!new.target) {
    return new User(name);
  }
  this.name = name;

  // return this   -> automatic
}

const user = User("Ravi");
console.log(user);

let arr = Array(1, 2, "he");
