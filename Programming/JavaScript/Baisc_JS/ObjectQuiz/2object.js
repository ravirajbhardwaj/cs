// You just need to implement the addCarColor function
function addCarColor(car, color) {
  // Add color property to the car object
  if (
    typeof car === "object" &&
    car !== null &&
    "model" in car &&
    "brand" in car &&
    typeof color === "string" &&
    color !== ""
  ) {
    car.color = color;
    return car;
  }
  return "Invalid color";
}

let myCar = { brand: "Tata", model: "swift" };
console.log(myCar);

const hello = addCarColor(myCar, "");
console.log(hello);
