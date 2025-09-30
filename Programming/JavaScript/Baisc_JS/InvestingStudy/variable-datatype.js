"use strict"; // treat all JS code as newer version

// Variable -> (let and const) Variable ka use hota hai information/data store krna ka liya, aur information/data agal agal type ke ho sakta

// let means ek baar jo value rakh de toh badal sakta hai

let userName = "Ravi"

let userMessage = "Hi"

let sonuMessage; // declear a variable

sonuMessage = userMessage // copy Hi from userMessage into sonuMessage 

// console.log(sonuMessage, userMessage);

// const means ek baar value rakh de to पत्थर की लकीर hai ji

const BIRTHDAY = 19
// console.log(BIRTHDAY);

// ✔ For primitive values → const makes them fully immutable (cannot change at all).

const NAME = "Sonu"
// NAME = "Ashi"

// AGE = 20


// ✔ For objects/arrays → const prevents reassignment but allows modifying elements/properties.
const numbers = [1, 2, 3]
numbers.push(4)
console.log(numbers)

// numbers = [1, 2, 3, 4]

/*
 Data types in Javascript
*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// 1 String -> "", '', ``

let color = "Red" 

// Backtick String `` -> we embmbed variable and expressions by wrap into ${…}

console.log(`${2/2}. Color: ${color}`)

// 2 Number -> Integer , Float, Infinity, -Infinity and NaN

let one = 1 // Integer // Float -> 2.3
console.log(1/0) 
console.log(-1/0) 

// 3 BigInt -> 2 to power 53 && use -> n at last
let sunDistanceFromEarth = 9007199254740992n

// 4 Boolean -> true or false
let isLoggedIn = false
let isPasswordCorrect = true

// boolean value comparision expression se bhi nikl sakti hai

let isGreater = 10 > 2
console.log(isGreater);

// 5 Null -> refrence to non-existing object or null pointer && abhi kuch nhi hai - means empty - nothingness - खाली

let temperature = null // खाली
console.log(temperature)

// 6 Undefined -> memory मे है पर बाद मे देखेंगे

let test; // value is not assigned
console.log(test)

// 7 Symbol -> symbol type is used to create unique identifiers for objects


console.table([typeof color, typeof one, typeof sunDistanceFromEarth, typeof isLoggedIn, typeof isPasswordCorrect, typeof isGreater, temperature, test])

console.log(typeof String) // function
console.log(typeof Number) // function
console.log(typeof BigInt) // function
console.log(typeof Boolean) // function


console.log(typeof null) // object -> mistake by JS owner
console.log(typeof undefined) // undefined

let sumFunc = () => {
    return "sum"
}

console.log(typeof sumFunc) // function

// Reference (Non primitive) -> Array, Objects, Functions

// Array

let marks = [90, 80, 70, 50];
console.log(marks);
console.log(typeof marks); // object 

// Object -> Store more complex data structures.

let studentProfile = {
    name: "Ravi",
    age: 19,
    isPaid: true,
    address: undefined
}

console.log(studentProfile);
console.log(typeof studentProfile); // object