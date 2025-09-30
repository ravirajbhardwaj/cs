// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name !== "string" ||
    name === "" ||
    typeof age !== "number" ||
    age <= 5 ||
    typeof grade !== "string"
  ) {
    // console.log(name, age, grade);
    return "Invalid input";
  } else {
    // console.log(name, age, grade);
    return {
      name,
      age,
      grade,
    };
  }
}

const student = createStudentProfile("Ravi", 10, "20");

console.log(student);
