// lexial scoping

let a = "Hey";
first();

function first() {
  let b = "Hello";
  second();
  function second(params) {
    let c = "Hi";
    console.log(a + b + c);
  }
}
