function User(name, age) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

console.log(User("Sunil"));

let user = new User("Ravi", 19);
console.log(user.isAdmin);

let user2 = new User("Sonu", 20);

// when new ka baad vala function execute hota hai toh

// Ek naya empty object create hota hai aur this usko point karta hai.
// Function body execute hoti hai aur this me naye properties add hote hain.
// Function implicitly this return karta hai.

console.log(user2);

let string = "ravi";
console.log(typeof string);
