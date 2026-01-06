// if -> agar condition ✅ toh if vala kaam kr do
//                      ❌ skip kr do niche ka kaam kro

// Truthy and Falsy value
// falsy values (only these 8)
// false, 0 , -0, 0n, "", null, undefined, NaN

let condition = [];

// [] => ''  Number('') -> 0
// console.log(condition.valueOf().toString())

if (condition) {
  console.log("If run");
}

// if-else  -> agar condition true hai toh if chalo nhi toh else
function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
  // return value ? "Truthy": "Falsy"
}

checktruthyValue("");

// if-elseif-esle -> agar bhoot condition check krni ho
// switch(){} -> is like a function ek chabhi milti hai

let statusCode = "404";
let statusCodeInNumber = 404; // Executes default case due to strict equality

switch (statusCode) {
  case "200":
    console.log("Success");
    break;
  case "404":
    console.log("Not found");
    break;
  case "500":
    console.log("Server Error");
    break;
  default:
    console.log("Unknown Status Code");
    break; // jiska koi nhi sahara uska mai
}

// Ternary Operator -> ek line me if-else krna ho

let isDarkMode = true;
let theme = isDarkMode ? 'Dark Theme' : 'Light Theme';
console.log(theme);