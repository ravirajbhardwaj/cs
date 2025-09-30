const users = {
  name: "Ravi",
  age: 5,
  prop: {
    height: 12,
    weight: 100
  }
}

// const clone = Object.assign({}, users)
// console.log(users.prop == clone.prop) // true because shallow copy

const clone = structuredClone(users)
console.log(users.prop == clone.prop) // false because deep copy