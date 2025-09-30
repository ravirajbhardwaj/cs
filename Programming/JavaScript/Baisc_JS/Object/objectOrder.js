// Kya objects ordered hote hain? 

// Let's find ans

// in codes all key is integer properties hai 
// integer properties -> Yahan "integer property" ka matlab hai 
// ek string jo integer mein convert ho sakti hai aur wapas string mein convert hone par same rahti hai.
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
}

for (const code in codes) {
  console.log(codes[code]);
}

/* output 
USA
Switzerland
Great Britain
Germany
*/

// let user = {
//   name: "Ravi", // non-integer properties
//   age: 19,
//   "0": "zero" // integer properties
// }

// user.isPaid = true

// for (const key in user) {
//   console.log(user[key])
// }

/* 
zero
Ravi
19
true
*/

// key -> non-integer properties means creation order mein list hoti hain

let user = {
  name: "Ravi", // non-integer properties
  age: 19,
}

user