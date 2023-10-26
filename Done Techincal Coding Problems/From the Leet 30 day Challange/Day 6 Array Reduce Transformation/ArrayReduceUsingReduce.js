/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// the reduce function built into js aggreages to a single value
// takes 2 params, initial value and a value from the list
// functional we do not have to manage state
var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};
