// You just need to implement the countProperties function
function countProperties(user) {
  // Return the number of properties in user
  if (user instanceof Object) {
    return Object.keys(user).length;
  }
}

let user = {
  // name: "Ravi",
  // age: "19",
  // phone: "987654321",
};

const lengthOf = countProperties(user);
console.log(lengthOf);
