/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100



 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* The removeElement function takes two parameters: nums, which is an array of integers, and val, which is the value that we want to remove from the array. */
var removeElement = function (nums, val) {
  /* We initialize a variable k to 0. This variable will be used to keep track of the position where elements not equal to val should be placed in the nums array. */
  let k = 0; // Initialize the variable to count elements not equal to val

  // Iterate through the array
  /* We use a for loop to iterate through the nums array. The loop variable i represents the current index in the array. */
  for (let i = 0; i < nums.length; i++) {
    /* Inside the loop, we check if the current element nums[i] is not equal to val. If it's not equal, it means we want to keep this element in the modified array. */
    if (nums[i] !== val) {
      /* If nums[i] is not equal to val, we do the following:

We assign the value of nums[i] to nums[k]. This effectively moves the current element to the k-th position in the nums array, where k is the count of elements not equal to val.
We increment the k variable by 1 to indicate that we have placed an element not equal to val in the correct position */
      // If the current element is not equal to val, move it to the k-th position
      nums[k] = nums[i];
      k++;
    }
  }
  /* Finally, we return the value of k. This value represents the count of elements in the nums array that are not equal to val, and it also represents the index where the elements not equal to val end in the modified array. */

  return k; // Return the count of elements not equal to val
};
/* The key idea here is that we are overwriting the elements in the nums array with the elements not equal to val, starting from the beginning of the array. After the loop, the first k elements in the nums array will contain the elements not equal to val, and the rest of the elements in the array are not important and can be ignored.

This code effectively removes all occurrences of val from the nums array in-place and returns the count of elements remaining in the modified array. */

let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1); // Output: 2
console.log(nums1); // Output: [2, 2, 2, 3] (the order may vary)
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2); // Output: 5
console.log(nums2); // Output: [0, 1, 3, 0, 4, 0, 4, 2] (the order may vary)

/* Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
  */
