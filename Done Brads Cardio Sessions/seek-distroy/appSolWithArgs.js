// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// solve with arguments, indexOf and filter
function seekAndDestroy(arr) {
  // the array is the first thing passed in
  console.log(arr);
  // create an array from the arguments object
  const args = Array.from(arguments);
  // array of the array and args
  console.log(args);
  function filterArr(arr) {
    // return true if not in array - if index of does not find it returns -1
    return args.indexOf(arr) === -1;
    /// return will be true or false
  }
  // now use what is true to filter the array
  output = arr.filter(filterArr);
  console.log(output);
}
seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
