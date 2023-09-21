/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  // declarative programming
  //   arr.filter((n, i) => n > 10);
  return arr.filter(fn);
};
