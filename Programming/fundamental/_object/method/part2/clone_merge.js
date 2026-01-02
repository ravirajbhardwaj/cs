let users = {
  name: "Ravi",
  age: 30,
};

let user2 = {
  name: "Sonu"
}

// top level clone -> same as "{...users}, Object.assign({}, users)"
for(let key in users) {
  // console.log(`key ${key}`)
  user2[key] = users[key]
}

// user2.timeLog = "M"

console.log(users)
console.log(user2)

