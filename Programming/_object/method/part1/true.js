function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};
const dog = new Animal("Buddy");
console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("eat"));
