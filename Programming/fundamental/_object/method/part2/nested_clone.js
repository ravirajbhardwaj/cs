let users = {
  name: "John",
  age: 30,
  prop: {
    height: 170,
    weight: 50
  }
};

let clone = {}

for(let key in users) {
  if (typeof users[key] == 'object') {
    let propName = users[key]
    for(let key in propName) {
      
    }
  }
  clone[key] = users[key]
}

console.log(clone.prop.height == users.prop.height)