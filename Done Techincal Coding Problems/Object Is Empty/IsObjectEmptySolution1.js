/* Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse. 
Constraints:

 2 <= JSON.stringify(obj).length <= 105
*/
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (JSON.stringify(obj).length <= 2) return true;
  else return false;
  //   if (Array.isArray(obj)) {
  //     return obj.length === 0;
  //   } else if (typeof obj === "object" && obj !== null) {
  //     return Object.keys(obj).length === 0;
  //   } else {
  //     return false;
  //   }
};

// Test cases
console.log(isEmpty({ x: 5, y: 42 })); // Output: false
console.log(isEmpty({})); // Output: true
console.log(isEmpty([null, false, 0])); // Output: false

/* 
Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 */
