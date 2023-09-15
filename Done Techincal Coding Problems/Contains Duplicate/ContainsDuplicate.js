/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSet = new Set(); // Create a set to store encountered numbers

  for (const num of nums) {
    if (numSet.has(num)) {
      return true; // Found a duplicate
    }
    numSet.add(num); // Add the number to the set
  }

  return false; // No duplicates found
};
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

/* Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true */
