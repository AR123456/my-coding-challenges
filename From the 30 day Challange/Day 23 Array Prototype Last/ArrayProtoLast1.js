/**
 * Note *******************
 * `Array.prototype.last` refers to adding a new method called `last` to the prototype of the `Array` object in JavaScript. The prototype of an object is a special kind of object that contains properties and methods that are inherited by all instances of that object type.

By adding a method to `Array.prototype`, you're essentially making that method available to all arrays in your JavaScript environment.

In the provided code, `Array.prototype.last` is a function that is defined to return the last element of an array or -1 if the array is empty. This means you can now call `last()` on any array, and it will return the last element of that array.

Keep in mind that modifying the prototype of built-in objects like `Array` can have unintended consequences and is generally considered a bad practice. It can lead to unexpected behavior in your code and conflicts with other libraries or code that might also extend the prototype. If possible, you should consider alternative approaches, such as creating a utility function instead of modifying the prototype.
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last()); // Output: 3

const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

const nums2 = [];
console.log(nums2.last()); // Output: -1
/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
//  Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000
