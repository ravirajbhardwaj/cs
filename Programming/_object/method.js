// Object methods: keys, values, entries, fromEntries, hasOwn, assign, freeze, 
// create, setPrototypeOf, getPrototypeOf

let user = {
  name: "Ravi",
  age: 19,
  gender: {
    isMale: true
  }
}

let userProperties = {
  height: 6,
  weight: 50,
  isMale: true,
  name: "Sonu" // overwrite user.name
}

// Object.assign -> merge multiple values into one 
//  && spread syntax -> const clone = {...user} // Yeh sirf top-level properties copy karta hai.

// Object.assign(user, userProperties)

// console.log(user)

const clone = Object.assign({}, user)
console.log(clone)


console.log(user.gender == clone.gender) //  true, same object -> means location is same

user.gender.isMale = false

console.log(user.gender, clone.gender)

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
const shallowClone = { ...person };
shallowClone.hobbies.push("cooking");

person.name = "Ravi";

console.log(person);
console.log(shallowClone);

// Destructuring with Renaming
const course = {
  name: "JavaScript",
  courseInstructure: "Hitesh",
};

const { courseInstructure: instructre } = course;

console.log(instructre);

let student = {
  name: "John",
  age: 30,
  prop: {
    height: 170,
    weight: 50
  }
};

let deepClone = {}

for (let key in student) {
  if (typeof student[key] == 'object') {
    let propName = student[key]
    for (let key in propName) {

    }
  }
  deepClone[key] = student[key]
}

console.log(deepClone.prop.height == student.prop.height)

const admin = {
  name: "Ravi",
  age: 5,
  prop: {
    height: 12,
    weight: 100
  }
}

// const clone = Object.assign({}, admin)
// console.log(admin.prop == clone.prop) // true because shallow copy

const structClone = structuredClone(admin)
console.log(admin.prop == structClone.prop) // false because deep copy

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

// ------- Circular Reference Example -------

let personOne = {
  name: "Ravi"
}

let personTwo = {
  name: "Ravi",
}

personTwo.me = personOne
personOne.me = personTwo

console.log(personOne)

// structuredClone(personOne) // Error: Converting circular structure to JSON
// To handle circular references, a custom cloning function is needed.