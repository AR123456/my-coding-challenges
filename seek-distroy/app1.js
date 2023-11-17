// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// solve with arguments, indexOf and filter
function seekAndDestroy() {
  arr = arguments[0];
  arr.filter((item) => !arguments[1].includes(item));
  console.log(arr);
}
seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
