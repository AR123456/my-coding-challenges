// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(nums) {
  // ES5 solution using arguments object and for loop
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  // old school way to turn args into array would now use array.from
  let args = Array.prototype.slice.call(arguments);
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(total);
}
addAll(2, 5, 6, 7);
