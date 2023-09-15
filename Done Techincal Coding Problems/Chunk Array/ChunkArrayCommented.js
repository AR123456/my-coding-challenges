/* Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
arr is a valid JSON array
2 <= JSON.stringify(arr).length <= 105
1 <= size <= arr.length + 1

*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
/* The function chunk takes two parameters: arr (the input array) and size (the desired size of each chunk).  */
var chunk = function (arr, size) {
  // array will hold the chunked subarrays.
  const chunkedArray = [];
  /* A for loop is used to iterate through the input array arr. The loop variable index starts at 0 and increments by size in each iteration. This means that in each iteration, the loop will process a chunk of size elements from the input array. */
  for (let index = 0; index < arr.length; index += size) {
    /* Inside the loop, the arr.slice(index, index + size) call extracts a portion of the input array. The starting index is index, and the ending index is calculated as index + size - 1. This creates a chunk of size elements, or less if the remaining elements are fewer than size. 
    The extracted chunk is pushed into the chunkedArray using the push method. This accumulates all the extracted chunks into the chunkedArray.*/
    chunkedArray.push(arr.slice(index, index + size));
  }

  return chunkedArray;
  /* In summary, this code snippet defines a function that takes an array and a chunk size as input and returns an array of subarrays, where each subarray has the specified chunk size (except for the last subarray, which might have fewer elements if the total number of elements is not evenly divisible by the chunk size). */
};

/* Example 1:

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
Explanation: There are no elements to be chunked so an empty array is returned. */
