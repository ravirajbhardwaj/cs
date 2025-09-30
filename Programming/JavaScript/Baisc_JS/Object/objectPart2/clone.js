const laptop = {
  name: "Asus TUF",
  brand: "asus",
  color: ["balck", "white"],
  ram: 8,
  ssd: 456
}

// const laptop2 = {
//   name: laptop.name,
//   brand: laptop.brand,
//   color: laptop.color,
//   ram: laptop.ram,
//   ssd: laptop.ssd
// }

const laptop2 = {
  ...laptop,
  ...laptop.color
}

laptop.color[0] = ""

console.log(laptop)
console.log(laptop2)