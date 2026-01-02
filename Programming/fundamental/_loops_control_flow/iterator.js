let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

function accumulate(anyArray) {
  let total = 0;
  for (let i = 0; i < anyArray.length; i++) {
    total += anyArray[i].price;
  }
  return total;
}

let productPrice = accumulate(salesData);
// console.log(productPrice);

const totalPrice = salesData.reduce(
  (totalPrice, product) => totalPrice + product.price,
  0
);

// console.log(totalPrice);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

const filterList = inventory.filter((user) => user.stock > 50);

// console.log(filterList);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

const mostActiveUser = userActivity.reduce((maxCount, user) =>
  user.activityCount > maxCount.activityCount ? user : maxCount
);

// console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] = expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

console.log(expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce(
    (totalRating, rate) => totalRating + rate,
    0
  );
  let average = total / movie.ratings.length;
  return { title: movie.title, averageRatings: average.toFixed(2) };
});

console.log(averageRatings);

const user = {
  name: "ravi",
  age: 19
}

for (const propName in user) {
  console.log(`propName: ${propName}: value: ${user[propName]}`)
}