// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}

const profile = {
  name: "Ravi",
  pfp: null,
};

cleanObject(profile);
console.log(profile);

for (const key in profile) {
  if (profile[key] === null || profile[key] === undefined) {
    console.log(key);
    delete profile[key];
  }
}

console.log(profile);
