/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  // map applies the function to each element in the array
  // a concept from functional programing vs procedural programing
  // functional programing generally has no state, no variables - passing functions into functions
  return arr.map(fn);
};
