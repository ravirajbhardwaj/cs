// String conversion -> chize bikul obivious hai primitive value ka liya 1 -> "1", false -> "false" , null -> "null", undefined -> "undefined"

// Syntax -> String(value)
let nums = [1, 2, 3, 4]

let arrNums = String(nums)
// console.log(typeof arrNums); // string

let profile = {
    name: "Ravi",
    age: 21
}

let objProfile = String(profile);
console.log(typeof objProfile); // string

// Number Conversion , Syntax -> Number(value)

// "33" => 33
// "33abc" => NaN but type is Number
// true => 1; false => 0, null => 0

console.log(Number(""));

// Boolean conversion

// Syntax -> Boolean(value)

// 0, null, undefined, NaN, "" -> false
// other value -> true

console.log(Boolean(""))


// --------------- Operations ---------------

// + - / * 
//  ** ->  %