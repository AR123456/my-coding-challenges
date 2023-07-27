//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * used ChatGPT to get this code
 */

const nums = [2, 7, 11, 15];
const target = 9;

console.time("twoSum");
const result = twoSum(nums, target);
console.timeEnd("twoSum");
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

if (result) {
  console.log(
    `The indices [${result[0]},${result[1]}] have values ${
      nums[result[0]]
    } and ${nums[result[1]]}, which have a sum of ${target}.`
  );
} else {
  console.log(`No pair of numbers found with a sum of ${target}.`);
}
