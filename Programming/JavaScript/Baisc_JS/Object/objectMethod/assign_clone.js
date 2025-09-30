// Object.assign -> merge multiple values into one 
//  && spread syntax -> const clone = {...user} // Yeh sirf top-level properties copy karta hai.
// (Shallow Copy)
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

// Object.assign(user, userProperties)

// console.log(user)

const clone = Object.assign({}, user)
console.log(clone)


console.log(user.gender == clone.gender) //  true, same object -> means location is same

user.gender.isMale = false

console.log(user.gender, clone.gender)