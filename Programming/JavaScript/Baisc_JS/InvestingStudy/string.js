let name = "Ravi"; // string

let newName = name; // Copy of 'name' is stored in Stack value (Independent copies)
newName = "Sonu";

// console.log(`Name ${name} and NewName ${newName}`);

// ------------ object (String object) --------------------------------------

let student = { studentName: "Ravi" };
// console.log(typeof student); // object

let userAge = new String("tweenty"); // object (String Object) -> String object is immutable
// console.log(userAge);  // [String: 'tweenty'] -> tweenty is object? lets investigate will find
// console.table(userAge) // Ans

// console.log(typeof student == typeof userAge); // true
// console.log(typeof student === typeof userAge); // true

let newUserAge = userAge; // 'newUserAge' gets a reference to userAge (same memory)


newUserAge = new String("Hi") // means reassigne

console.log(`UserAge: ${userAge} and NewUserAge: ${newUserAge}`);
