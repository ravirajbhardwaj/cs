// jo bhi code likha hai uska pacakage bna diya

function sayMyName() {
  console.log("R");
  console.log("a");
  console.log("v");
  console.log("i");
}

sayMyName();

function addTwo(a, b) {
  // let result = a + b
  // return result
  return a + b;
}

let result = addTwo(1, 2);

console.log(result);

function calculateCartPrice(val1, vale2, ...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  name: "Ravi",
  age: 19,
};

function handleObject(anyobject) {
  console.log(`User name is ${anyobject.name}
    and price is ${anyobject.age}`);
}

handleObject({
  name: "Sonu",
  age: 20,
});

handleObject(user);

function handleArray(anyArray) {
  return anyArray[0];
}

const num = [1, 2, 3, 4, 5];

console.log(handleArray(num));
console.log(handleArray(["ravi", 19]));

function one() {
  let username = "ravi";
  function two() {
    let website = "google.com";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();
