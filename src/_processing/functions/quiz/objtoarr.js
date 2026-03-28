// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  if (obj instanceof Object && Object.keys(obj).length > 0) {
    return Object.entries(obj);
  }
  return [];
}

let user = {
  // name: "Ravi",
  // age: 19,
};

let arr = Object.entries(user);

console.log(arr);
