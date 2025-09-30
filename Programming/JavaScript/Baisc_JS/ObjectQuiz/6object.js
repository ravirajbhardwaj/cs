// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  if (
    obj1 instanceof Object &&
    obj2 instanceof Object &&
    (Object.keys(obj1).length > 0 || Object.keys(obj2).length > 0)
  ) {
    return Object.assign({}, obj1, obj2);
  } else {
    return {};
  }
}

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

personOne = {
  name: "Ravi",
  age: 19,
};

personSame = {
  age: 20,
  email: "@ravi",
};

console.log(mergeObjects(personOne, personSame));
