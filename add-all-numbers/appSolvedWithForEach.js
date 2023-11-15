// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll(...rest) {
function addAll(...numbers) {
  // spread operator - rest and reduce / forEach
  //The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  console.log(total);
}
addAll(2, 5, 6, 7);
