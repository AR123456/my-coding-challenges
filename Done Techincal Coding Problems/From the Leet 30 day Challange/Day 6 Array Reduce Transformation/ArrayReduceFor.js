/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// this is imparative way to solve
var reduce = function (nums, fn, init) {
  // return nums.reduce(fn, init);
  // re create the reduce method
  let res = init;
  for (const n of nums) {
    res = fn(res, n);
  }
  return res;
};
