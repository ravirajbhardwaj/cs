// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property

  if (product instanceof Object) {
    if (product.hasOwnProperty("discount")) {
      return true;
    } else {
      return false;
    }
  }
}

let Laptop = { name: "Laptop", price: 100 };
let Phone = { name: "Phone", price: 100, discount: 1 };

console.log(hasDiscount(""));
console.log(hasDiscount(Laptop));

console.log(hasDiscount(Phone));
