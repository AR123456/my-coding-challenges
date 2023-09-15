/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  // If the array is empty, return the initial value
  if (nums.length === 0) {
    return init;
  }

  // Initialize the accumulator with the initial value
  let accumulator = init;

  // Loop through the array and apply the reducer function
  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i]);
  }

  // Return the final value after processing all elements in the array
  return accumulator;
};
// Example 1
const nums1 = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) {
  return accum + curr;
};
const init1 = 0;
console.log(reduce(nums1, fn1, init1)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};
const init2 = 100;
console.log(reduce(nums2, fn2, init2)); // Output: 130

// Example 3
const nums3 = [];
const fn3 = function sum(accum, curr) {
  return 0;
};
const init3 = 25;
console.log(reduce(nums3, fn3, init3)); // Output: 25
