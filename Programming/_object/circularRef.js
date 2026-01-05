const person = { name: "Kallu" };
person.self = person;

// console.log(JSON.stringify(person));

console.log();

const newPerson = {
  name: "Ravi",
  age: 19,
  prop: {
    height: {
      cm: 178,
      m: 2,
    },
    weight: {
      kg: 50,
    },
    study: {
      progLang: {
        name: {
          py: "python",
        },
      },
    },
  },
};

const stringObj = JSON.stringify(newPerson);

// console.log(typeof stringObj)
