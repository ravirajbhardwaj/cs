// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.itmes = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.itmes.push(price);
};

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  return this.itmes.reduce((acc, currentPrice) => acc + currentPrice, 0);
};
