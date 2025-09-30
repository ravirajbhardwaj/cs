let name = "Ravi";

console.log(name.length);

// indexOf() start se dhoondhta hai, lastIndexOf() end se

// indexOf -> string.indexOf(searchValue, startIndex) read data -> start
// lastIndexOf -> string.lastIndexOf(searchValue, fromIndex) read data -> end

// searchValue -> char and substring
// startIndex -> kahan se search krna hai -> default 0

// fromIndex -> kahan se search krna hai -> default str.length

// return -> -1 if value not found, otherwise index

let text = "JavaScript is awesome!";

console.log(text.indexOf("a")); // 1
console.log(text.indexOf("is")); // 11
console.log(text.indexOf("Python")); // -1 not found

// case sensitive
console.log(text.indexOf("S")); // 12
console.log(text.indexOf("s")); // 12

console.log(text.indexOf("")); // why first always 0 ?
// JS specification -> kyuki empty string ko har string ke start "present" mana jata hai

// Real life example of indexOf

const userEmail = ["ravirajbhar@gmail.com", "sonu@yahoo.com"];

let atIndexOne = userEmail[0].indexOf("@"); // found at 7
let atIndexTwo = userEmail[1].indexOf("@"); // found at 7
console.log(atIndexOne);
console.log(atIndexTwo);

const userName = [];

userName.push(userEmail[0].slice(0, atIndexOne));
userName.push(userEmail[1].slice(0, atIndexTwo));

console.log(userName);

// ---> lastIndexOf
console.log(text.lastIndexOf("a", 5));
console.log(text.lastIndexOf("z")); // -1
console.log(text.lastIndexOf("")); // always return string ki length

// real life examples

let fileName = ["image.jpg", "aud.mp3", "document.pdf"];

let lastDotIndex = fileName[0].lastIndexOf(".");
const imageExtension = fileName[0].slice(lastDotIndex);
console.log(imageExtension);

let text2 = "JavaScriptRocks!";

// slice -> when you need some portion of any string

// substring() -> smart 😎

// Syntax -> string.slice(startIndex, endIndex)
//         -> string.substring(startIndex, endIndex)

// startIndex -> (required) kahan se shuru karna hai
// endIndex -> (optional) kahan tak kaatna hai (yeh index exclude hota hai)
//               agar nahi diya toh end tak kaat dega

// endIndex is exclusive
// both are option -> so return same string

console.log(text2.slice());
// return -> kata huwa portion aur ""

// const java = text2.slice(0, 4);
const java = text2.substring(-4);
console.log(java);

// endIndex is option
console.log(text2.slice(4)); // 4 -> end

// neg index (end se count)

console.log(text2.slice(-6, -1)); // last 6th index -> last 1th index

console.log(text2.substring(-3, 10)); // -val convert into 0
console.log(text2.substring(-3, -10)); // both -val means (0,0)

// // Start > End
console.log(text2.slice(5, 1)); // always return -> ""

console.log(text2.substring(4, 0)); // start and end ko swap kr diya

// Real life examples

let phonee = "+91-987654321 INDIA";

let dashIndex = phonee.indexOf("-");
console.log(dashIndex);

let countryCodeIndia = phonee.substring(0, dashIndex);
console.log(countryCodeIndia);

// // if end se count krna ho

let country = phonee.slice(-5);
console.log(country);
console.log(phonee.substring(phonee.length - 5));

// replace method string mai kisi specific value (text ya pattern)
// ko dhoondhkar use dursi value se badal deta hai

// Syntax -> string.replace(serachValue, replaceValue)

// searchValue -> Jo replace krna hai (string or regex)

// string case -> replace first occurence
// regex case -> replce sare occurences

// replaceValue -> Jisse replace krna hai

// return -> new string return krta hai
//          if replaceValue not found then return orignalStr

let str = "Hello world World World";
let newStr = str.replace("World", "Duniya");
console.log(newStr); // Hello Duniya World

console.log(str.replace(/World/g, "Dunyia"));

// repeat just for curious discored how repeat work
let star = "*";
console.log(star.repeat(10));

// case sensitive
const lang = "JavaScript is javascript";

console.log(lang.replace("javascript", "JS"));

// Regex se case-insensitive banayein (/i)
console.log(lang.replace(/javascript/gi, "JS"));

let phone = "123-456-7890";

let phoneNumber = phone.replace(/-/g, "");
console.log(phoneNumber);

let text3 = "price: 100";

let updated = text3.replace(/\d+/, function (match) {
  return parseInt(match) * 2;
});

console.log(updated);

const email = "ravi@email.com";
console.log(email.replace(/@.*/, ""));

// Split() -> ek string ko "tukdo mai kaat kar" array banane ka
//            kaam krta hai
//

// Syntax -> string.split(separator, limit)

// separator ->(opt) char or str jahan se split krnana hai
//                 default : poori string ek array element
// limit ->(opt) -> max array length (kitne tukde)

// return -> array based on "separator"

let sentence = "Hello Ravi Sonu Sunil Urmila Harilal";

// space split
let words = sentence.split(" ");
console.log(words);

// without space Every char
let char = words[0].split("");
console.log(char);

// CSV values ko array

let csv = "Apple,Bannana,Mango";
let fruit = csv.split(",");
console.log(fruit);

// Limit set 2 tukde
let data = "one-two-three-four";

console.log(data.split("-", 2));

// Real world use case

let userTags = "#js #100dayscode #coding";
let tags = userTags.split("#").slice(1);
console.log(tags);

let username = "  Ravi   ";

// trim(), trimStart(). trimEnd()

console.log(username.trim()); // trim from both side
console.log(username.trimStart()); // trim -> start
console.log(username.trimEnd()); // trim -> end

// toUpperCase(), toLowerCase()
let myName = "ravi";
let mySirName = "RAJ";

let fullName = myName.toUpperCase() + mySirName.toLocaleUpperCase();
console.log(fullName);

// includes() => return true/flase

let person = "Ravi";
console.log(person.includes("a", 1));

// startWith and endWith => return true/false

const logo = "image.png";
const greet = "Mr." + person;
console.log(logo.endsWith(".png"));
console.log(greet.startsWith("Mr"));
