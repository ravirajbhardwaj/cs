// Iterating using a traditional for loop
let guests = 5

for (let i = 0; i < guests; i++) {
  console.log(`Making tea cup ${i + 1}`)
}

// Iterating using while loop
let battery = 40

while (battery < 100) {
  console.log(`Battery at ${battery}%. Charging...`)
  battery += 10
}

console.log("Battery fully charged!")

// Iterating using do...while loop

// You visiting your friend’s house. You must knock on the door at least once.
// But if no one answers, you keep knocking until someone does.

let someoneAnswered = false;

do {
  console.log("Knocking on the door...");
  someoneAnswered = Math.random() > 0.6; // 40% chance someone answers
} while (!someoneAnswered);

console.log("Friend opened the door!");

// Iterating over an array using for...of loop
let fruits = ["apple", "banana", "mango"]

for (const fruit of fruits) {
  console.log(fruit)
}

// Iterating over an object's properties using for...in loop
const user = {
  name: "Ravi",
  age: 21,
  city: "New York",
}

for (const key in user) {
  console.log(`key: ${key}: value: ${user[key]}`)
}

// Using break and continue
