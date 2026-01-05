const fs = require("fs");

const user = {
  name: "Ravi",
  age: 19,
  height: 160,
};

fs.writeFileSync("data.json", JSON.stringify(user));

console.log("Data saved in JSON formet!");
