// object create in two ways

// const user = new Object(); ->  "object constructor" syntax
// const user = {} -> "object literal" syntax

// key -> String or Symbol

let user = {
  name: "Ravi", 
  age: 20,
  "is Paid": true, // multiword property name must be quoted
};

// console.log(user["is Paid"]);

let key = "name";
// console.log(user[key]);

// you can not use dot notation similar way

let dotKey = "age";
// console.log(user.dotKey); // undefind

// computed properies

const WHITE = "fff";

let user2 = {
  [WHITE]: "Ravi", // WHITE -> fff
};

console.log(user2.fff);
