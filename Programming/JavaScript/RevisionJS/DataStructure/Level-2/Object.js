// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

let bag = {
  books: 5,
  pens: 10,
  waterBottle: 1,
};

console.log(Object.keys(bag));
console.log(Object.values(bag));

console.log(Object.entries(bag));

console.log(bag.hasOwnProperty("books"));
console.log(bag.hasOwnProperty("laptop"));

const newBag = Object.assign({}, bag, { laptop: 10 });
newBag.books = 10;
console.log(newBag);
console.log(bag);

let sym = Symbol("uniqueKey");

let objWithKey = {
  name: "Ravi",
  [sym]: 1,
};
for (const key in objWithKey) {
  console.log(objWithKey[key]);
}

for (const key in objWithKey) {
  if (Object.prototype.hasOwnProperty.call(objWithKey, sym)) {
    const element = objWithKey[key];
    console.log(element);
  }
}

// simple destructuring
let [firstName, surname] = ["Ravi", "Raj"];
console.log(firstName);
console.log(surname);

// Skipping Items with Commas

let [fname, , lname] = "Ravi Raj Bhardwaj".split(" ");
console.log(fname);
console.log(lname);

let names = [
  "Ravi",
  "Sonu",
  "Sunil",
  "Mukul",
  "Ashi",
  "Modi",
  "kejriwal",
  "amitsah",
];

let [myName, myBrother1, myBrother2, myBrother3, myBesti, ...faltu] = names;

console.log(faltu);
console.log(myBrother1);
console.log(myBrother2);
console.log(myBrother3);
console.log(myBesti);

// Default Values
let num = [1, 2];
const [numOne, numTwo, numThree = 3] = num;
console.log(numThree);

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// let { title, width, height } = options;
// console.log(title, width, height);

// remaining with colon
let { title: t, width: w, height: h } = options;
console.log(t, w, h);

// nesting
let optionsTwo = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

const {
  size: { width, height },
  items: [cake, donut],
  extra,
} = optionsTwo;

console.log(width);
console.log(height);
console.log(cake);
console.log(donut);
console.log(extra);

function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
} = {}) {
  console.log(`${title} ${width} ${height}`);
  console.log(items);
}

showMenu({ title: "My Menu", items: ["Item1", "Item2"] });
