// JSON.stringify() => 
//             undefined, function, symbol → object me omit ho jaate hain.
//             undefined, function, symbol → array me null ban jaate hain.

console.log(JSON.stringify({ age: 100, key: undefined, keyOne: function () { }, keyTwo: Symbol("") }))
console.log(JSON.stringify([100, undefined, function () { }, Symbol("")]))

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

console.log(JSON.parse(sampleJSONString, (_, value) => {
  return typeof value === 'number' ? value * 2 : value
}))

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;

JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return key == "occupiedBy" ? undefined : value;
});

console.log(
  JSON.stringify(meetup, ["title", "participants", "name", "place"])
);
