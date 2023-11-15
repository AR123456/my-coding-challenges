// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll(...rest) {
function addAll(...numbers) {
  total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(total);
}
addAll(2, 5, 6, 7);
