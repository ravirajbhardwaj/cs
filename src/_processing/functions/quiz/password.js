// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if (user instanceof Object && ("username" in user || "password" in user)) {
    delete user["password"];
    return user;
  }
}

let user = {
  username: "Ravi",
  password: "99999",
};

let updatedUser = removePassword(user);
console.log(updatedUser);
