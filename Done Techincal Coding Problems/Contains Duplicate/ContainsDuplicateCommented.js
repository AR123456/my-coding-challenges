/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 * @param {number[]} nums
 * @return {boolean}
 */
/* You can solve this problem by using a hash set to keep track of the numbers you've encountered so far. Here's the implementation for the containsDuplicate function: */
// 1 The containsDuplicate function is defined, taking an array of integers nums as a parameter.
var containsDuplicate = function (nums) {
  // 2 Inside the function, a Set named numSet is created. A set is a data structure that stores a collection of unique values. It will be used to keep track of the numbers encountered in the array.
  const numSet = new Set(); // Create a set to store encountered numbers
  // 3 The function then enters a loop that iterates through each element num in the nums array.
  for (const num of nums) {
    // 4 Inside the loop, the code checks whether the current num is already present in the numSet using the has method of the set (numSet.has(num)). If the number is already in the set, it means that the array contains a duplicate, so the function immediately returns true.
    if (numSet.has(num)) {
      // 5 If the current num is not in the set, it means it's encountered for the first time, so it is added to the numSet using the add method (numSet.add(num)).
      //  6 The loop continues until all elements in the nums array have been processed.
      return true; // Found a duplicate
    }
    // 7 After the loop, if no duplicates were found (i.e., the loop completed without returning true), the function returns false to indicate that there are no duplicate elements in the array.
    numSet.add(num); // Add the number to the set
  }

  return false; // No duplicates found
};
/* y using a Set data structure, the code efficiently keeps track of encountered numbers and detects duplicates. Since sets only store unique values, if a number is encountered more than once in the array, it will already be present in the set when the has method is called, and the function will return true. Otherwise, if all numbers in the array are distinct, the function will return false */
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
