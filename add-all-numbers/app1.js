// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(nums) {
  let sum = 0;
  while (nums) {
    sum += nums % 10;
    nums = Math.floor(nums / 10);
  }
  console.log(sum);
}
addAll(1, 2, 3);
