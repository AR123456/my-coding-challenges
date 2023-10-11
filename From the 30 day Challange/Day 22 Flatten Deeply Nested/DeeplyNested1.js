/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
// a recursive approach
var flat = function (arr, n) {
  function flattenHelper(arr, depth) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        result = result.concat(flattenHelper(arr[i], depth - 1));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  return flattenHelper(arr, n);
};

// Example usage:
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n1 = 0;
console.log(flat(arr1, n1)); // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n2 = 1;
console.log(flat(arr2, n2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
const n3 = 2;
console.log(flat(arr3, n3)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
