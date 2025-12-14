console.log("Hi");

setTimeout(function timeFn() {
  console.log("Run after 0sec");
}, 0);

Promise.resolve().then(function p1() {
  console.log("Promise 1 resovle ho gya");
  Promise.resolve().then(function p2() {
    console.log("Promise 2 resovle ho gya");
    Promise.resolve().then(function p3() {
      console.log("Promise 3 resovle ho gya");
      Promise.resolve().then(function p2() {
        console.log("Promise 4 resovle ho gya");
        Promise.resolve().then(function p2() {
          console.log("Promise 5 resovle ho gya");
          Promise.resolve().then(function p2() {
            console.log("Promise 6 resovle ho gya");
            while (true) {
              console.log("Hum kisi ko moka nhi deta");
            }
          });
        });
      });
    });
  });
});

console.log("Bye");
