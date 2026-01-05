const person = { name: "Alice", hobbies: ["reading", "gaming"] };
const clone = { ...person };
clone.hobbies.push("cooking");

person.name = "Ravi";

console.log(person);
console.log(clone);
