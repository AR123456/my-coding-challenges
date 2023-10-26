/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 * Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
Please solve it without using lodash's _.chunk function.
Constraints:
arr is a valid JSON array
2 <= JSON.stringify(arr).length <= 105
1 <= size <= arr.length + 1
 * 
 */
// input array and create subarrays of the specified size
// pass in arr and size
var chunk = function (arr, size) {
  if (size <= 0) {
    throw new Error("Size must be greater than 0");
  }
  // array to store the sub arrays
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    // creates a new subarray starting from index i  and ending at index i + size. This effectively extracts a chunk of the array.
    // result.push(...) adds the newly created subarray to the result array
    result.push(arr.slice(i, i + size));
  }

  return result;
};
// Example 1
var example1 = chunk([1, 2, 3, 4, 5], 1);
console.log(example1); // Output: [[1],[2],[3],[4],[5]]

// Example 2
var example2 = chunk([1, 9, 6, 3, 2], 3);
console.log(example2); // Output: [[1,9,6],[3,2]]

// Example 3
var example3 = chunk([8, 5, 3, 2, 6], 6);
console.log(example3); // Output: [[8,5,3,2,6]]

// Example 4
var example4 = chunk([], 1);
console.log(example4); // Output: []

/* 
 

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
Example 3:

Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation: Size is greater than arr.length thus all elements are in the first subarray.
Example 4:

Input: arr = [], size = 1
Output: []
Explanation: There are no elements to be chunked so an empty array is returned.
 
*/
