/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* The searchInsert function takes two parameters: nums (a sorted array of distinct integers) and target (the value you want to find or insert). */
var searchInsert = function (nums, target) {
  /* Initialize two pointers: left and right. left starts at the beginning of the array (index 0), and right starts at the end of the array (index nums.length - 1). */
  let left = 0;
  let right = nums.length - 1;
  /* Enter a while loop that continues as long as left is less than or equal to right. This loop will perform a binary search to find the target or the position where it should be inserted. */
  while (left <= right) {
    /* Calculate the mid index as the floor value of the average of left and right. This mid index is used to check the element at that position in the array. */
    const mid = Math.floor((left + right) / 2);
    /* Check if nums[mid] is equal to the target. If it is, return mid, as you have found the target at that position in the array. */
    if (nums[mid] === target) {
      return mid;
      /* If nums[mid] is less than the target, it means the target should be to the right of the mid index. So, update left to mid + 1 to search in the right half of the current search range. */
    } else if (nums[mid] < target) {
      left = mid + 1;
      /* If nums[mid] is greater than the target, it means the target should be to the left of the mid index. So, update right to mid - 1 to search in the left half of the current search range. */
    } else {
      right = mid - 1;
    }
  }
  /* Repeat steps 4-7 until left becomes greater than right. This indicates that the search range has collapsed to a single element, and if the target is not found by this point, it should be inserted at the left position.

Finally, return left, which represents the index where the target should be inserted. */
  return left;
};
/* Here's a summary of how the code works: It efficiently narrows down the search range by dividing it in half at each step using binary search until it either finds the target or determines the correct insertion point. This algorithm has a time complexity of O(log n), making it very efficient for large arrays. */
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log(searchInsert(nums1, target1)); // Output: 2

const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log(searchInsert(nums2, target2)); // Output: 1

const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log(searchInsert(nums3, target3)); // Output: 4
/* Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */
