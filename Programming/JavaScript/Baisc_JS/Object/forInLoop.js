const user = {
  name: "ravi",
  age: 19
}

for (const propName in user) {
  console.log(`propName: ${propName}: value: ${user[propName]}`)
}