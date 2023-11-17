// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

///////////////////////////////

// Filter out elements that are present in the arguments
/* unction takes an array (arr) as its first parameter and uses the rest parameter (...args) to gather the remaining parameters as an array. It then uses the filter method to create a new array containing only the elements that are not present in the args array. The includes method is used to check if an element is present in the args array. The filtered array is then returned as the result. */
function seekAndDestroy(arr, ...args) {
  // The filter method creates a new array with all elements that pass the provided function's test.
  // the test checks if each element (item) in the array arr is not present in the args array using the includes method.
  //   condition checks if the current element (item) is NOT included in the args array. If it is not included, the element is kept in the filtered array; otherwise, it is excluded.
  return arr.filter((item) => !args.includes(item));
}

// Example usage:
const result = seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
console.log(result); // Output: [3, 4, 'hello']
