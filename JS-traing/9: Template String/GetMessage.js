// Template Strings

// 1
function getMEssage() {
  const year = new Date().getFullYear();
  // return "The year is " + year;

  // return `The year is ${year}` //or `The year is ${year *2}`
  return `The year is ${new Date().getFullYear()}`;
}
getMessage();

// 2
function getMEssage() {
  return `The year is ${new Date().getFullYear()}`;
}
getMessage();
