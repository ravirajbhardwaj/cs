// Array is object

let numbers = [1, 2, 3, 4, 5];

// numbers = { // key -> ya toh string ya symbol (ya mujhe nhi pta)
//   "0": 1, // integer property ->
//   "1": 2,
//   "2": 3,
//   "3": 4,
//   "4": 5,
//   "5":
// }

let key = 6;
numbers[key] = "Ravi"; // add same

// for(const propName in numbers) {
//   console.log(numbers[propName])
// }

// console.log(numbers.length)

for (let i = 0; i < numbers.length; i++) {
  
  console.log(numbers[i]);
}
