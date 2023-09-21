/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  // //////////declarative programming -- using built in filter method in lin function
  //   arr.filter((n, i) => n > 10);
  //   return arr.filter(fn);

  // /////////imperative programming - we manage the state
  const res = [];
  // look at each element in the array-
  for (let i = 0; i < arr.length; i++) {
    // perform the function on each element - use arr at index i to get value arr[i]
    // this is a string so cast it to a number
    if (fn(arr[i], i)) {
      // put the return of the function into a new array
      res.push(arr[i]);
    }

    //return the new array
    return res;
  }
};
