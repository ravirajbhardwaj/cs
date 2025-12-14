// fuction is also treat a value like string, number and etc

// function defination below

console.log(sayHi());

function sayHi() {
    console.log("Hi")
}

// console.log(sayHi) // type of -> function and typeof sayHi -> [Function: sayHi] 

// function expression below

let name = "Ravi";

let greet = function (name) {
    console.log(name)
}

// console.log(greet) // type of -> function and typeof greet -> [Function: greet]

let func = greet // func ko greet defination ka reference diya gya hai

func()
greet()