// {} -> always make GEC [this] // browser -> this -> window

// JS file -> {GCE} <- this

// GCE
// FEC

// Run into two phase
// Memory Phase (M creation Phase) -> jagah allocation hoti hai

// 1 cycle

// a = undefined
// b = undefined
// addNum = defination
// resultOne = undefined
// resultTwo = undefined

// Execution Phase (Thread of Execution)

// a = 10
// b = 10

// function invoked addNum() -> FEC
// Memory            // code
// a = undefind      // numOne = 10
// b = undefind      // numTwo = 5
//                    result = 15 and return to GEC and delte FEC

let a = 10;
let b = 5;

function addNum(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
}

let resultOne = addNum(a, b);
let resultTwo = addNum(2, 3);
