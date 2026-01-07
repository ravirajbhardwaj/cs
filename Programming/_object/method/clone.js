const laptop = {
  name: "Asus TUF",
  brand: "asus",
  color: ["balck", "white"],
  ram: 8,
  ssd: 456
}

// const laptop2 = {
//   name: laptop.name,
//   brand: laptop.brand,
//   color: laptop.color,
//   ram: laptop.ram,
//   ssd: laptop.ssd
// }

const laptop2 = {
  ...laptop,
  ...laptop.color
}

laptop.color[0] = ""

console.log(laptop)
console.log(laptop2)

let users = {
  name: "Ravi",
  age: 30,
};

let user2 = {
  name: "Sonu"
}

// top level clone -> same as "{...users}, Object.assign({}, users)"
for (let key in users) {
  // console.log(`key ${key}`)
  user2[key] = users[key]
}

// user2.timeLog = "M"

console.log(users)
console.log(user2)

// Shallow Clone Example
const person = { name: "Alice", hobbies: ["reading", "gaming"] };
const clone = { ...person };
clone.hobbies.push("cooking");

person.name = "Ravi";

console.log(person);
console.log(clone);

// Destructuring with Renaming
const course = {
  name: "JavaScript",
  courseInstructure: "Hitesh",
};

const { courseInstructure: instructre } = course;

console.log(instructre);