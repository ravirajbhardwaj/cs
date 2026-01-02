let user1 = {
  name: "Ravi"
}

let user2 = {
  name: "Ravi",
}

user2.me = user1

user1.me = user2

console.log(user1)
// user.me = user; // Circular reference
