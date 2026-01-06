// function jsonMethods(jsonString) {
//   console.log("Original JSON String:", jsonString);

//   // Parsing JSON string to JavaScript object
//   let parsedObject = JSON.parse(jsonString);
//   console.log("After JSON.parse():", parsedObject);

//   // Stringifying JavaScript object to JSON string
//   let jsonStringified = JSON.stringify(parsedObject);
//   console.log("After JSON.stringify():", jsonStringified);
// }

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

// jsonMethods(sampleJSONString);

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student, null, 1);
console.log(json);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
// };

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// // console.log(JSON.stringify(room))

// console.log(
//   JSON.stringify(meetup, ["title", "participants", "name", "place", "number"])
// );

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;

// JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return key == "occupiedBy" ? undefined : value;
// });

let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2));
