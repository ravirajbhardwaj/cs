// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

let user = makeUser("John", 30);
// console.log(user);

// short hand

function makeUser(name, age) {
  return {
    name, // name is same as -> name: name
    age, // age is same as -> age: age
  };
}

let userObj = {
  0: "R", // same as "0": "R"
  name: "Ravi"
};

userObj[0]

let schedule = {}

console.log(isEmpty(schedule))

schedule["8:30"] = "get up"

console.log(isEmpty(schedule))

function isEmpty(schedule) {
  for( key in schedule) {
    if (schedule[key] == undefined) {
      return false
    }
  }
  return true
}