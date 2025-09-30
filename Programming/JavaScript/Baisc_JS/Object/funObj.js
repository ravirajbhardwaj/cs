let obj = {
  name: "Ravi",
  age: 19,
  city: undefined,
};

console.log(obj.country); // not exist return "undefined"

let key = "age";
// console.log(key in obj)  // you also do this console.log("age" in obj)


// --------- undefined is fail but "in" not fail

console.log(obj.city) // it's undefined, so - no such property?

console.log("city" in obj) // true,  the property does exist!