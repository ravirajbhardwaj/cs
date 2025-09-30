let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key]
}
console.log(sum)


let studentPaidHai = "isPaid"

let user = {
  name: "John",
  age: 30,
  [studentPaidHai]: true // computed value is "isPaid" --> same as [ isPaid: true ]
  //                        [studentPaidHai] ka matlab hai ki property name studentPaidHai variable se liya jayega.
};

console.log(user.isPaid)

let key = "name" // assume value calculate at runtime

console.log(`User name : ${user[key]}`) // value also so based on key 

let dotNotationKey = "name"

console.log(`User name : ${user.dotNotationKey}`) // we do not do this with dot notation
