let book = {
  name: "Atomic Habit",
  author: "James Clear",
  year: 2010,
};

book.price = 200;
book["price"] = 300;

delete book.year;

console.log(book);
