// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  // if (obj instanceof Object) {
  //   return JSON.parse(JSON.stringify(obj));
  // }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }
}
