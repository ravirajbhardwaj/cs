// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  this.name = name;
  if (price >= 0) {
    this.price = price;
  }
  if (stock >= 0) {
    this.stock = stock;
  }
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function (percent) {
  if (percent >= 0 && percent <= 100) {
    this.price = Math.round(this.price - this.price * (percent / 100));
    return [this.price, percent];
  }
  return [this.price];
};

// Define purchase method on Product's prototype
Product.prototype.purchase = function (quantity) {
  if (this.stock === Number(quantity)) {
    return (this.stock -= quantity);
  } else if (this.stock < quantity) {
    return "Not enough stock";
  } else if (this.stock > quantity) {
    return (this.stock -= quantity);
  }
};

const product1 = new Product("Laptop", 1000, 5);
console.log(product1.applyDiscount(-10));
console.log(product1.purchase(1));

// console.log(product1.applyDiscount(120));

const product2 = new Product("Phone", 500, 10);
