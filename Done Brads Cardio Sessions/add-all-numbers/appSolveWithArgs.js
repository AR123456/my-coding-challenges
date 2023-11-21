// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(nums) {
  // ES5 solution using arguments object and for loop
  // the arguments object is array like
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    sum = sum + arguments[i];
  }
  console.log(sum);
}
addAll(2, 5, 6, 7);
