// arrow function is a compact version of a traditional function

// traditional function
function multiplyByTwo(x) {
  return x * 2;
}

// arrow function
const multiplyByTwoArrow = x => x * 2
multiplyByTwoArrow(5);

// differences:
// 1 Arrow functions ke paas apna this, arguments, ya super binding nahi hota.
// 2 Arrow functions ko constructor ke roop mein use nahi kiya ja sakta.
// 3 Arrow functions ke andar yield use nahi kar sakte.