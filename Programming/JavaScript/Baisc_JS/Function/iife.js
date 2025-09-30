let name = "Ravi";

(function db() {
  // named IIFE
  console.log("Database is connected", name);
})();

((name) => {
  console.log("Welcome to Website", name);
})("Sonu");
