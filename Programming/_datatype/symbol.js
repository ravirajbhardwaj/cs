let id = Symbol.for("This is the id");
let id2 = id; // symobl with description

console.log(id == id2);

console.log(id.iterator);

const user = {
  name: "Ravi",
};

const user2 = {
  name: "Sonu",
};

// -> with symbol
// const id = Symbol()
// user[id] = 1
// user2[id] = 2

// console.log(user[id])
// console.log(user2[id])

age = "This";
const person = {
  name: "Ravi",
  [id]: 1,
  [age]: 19,
};

console.log(person["This"]);
for (let key in person) {
  console.log(key);
}

console.log(Object.values(person));

const person2 = {
  name: "Sonu",
  [age]: 20,
};

console.log(person2["This"]);
