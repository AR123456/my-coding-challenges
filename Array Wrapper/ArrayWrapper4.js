/* Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
Note: nums is the array passed to the constructor
*/
/**
 * @param {number[]} nums
 */

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.flat().reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return "[" + this.nums.map((arr) => arr.join(",")).join("],[") + "]";
  }
}

// Test cases
const nums1 = [
  [1, 2],
  [3, 4],
];
const operation1 = "Add";
const obj1 = new ArrayWrapper(nums1);

const nums2 = [[23, 98, 42, 70]];
const operation2 = "String";
const obj2 = new ArrayWrapper(nums2);

const nums3 = [[], []];
const operation3 = "Add";
const obj3 = new ArrayWrapper(nums3);

if (operation1 === "Add") {
  console.log(obj1 + obj2); // Output: 10
}

if (operation2 === "String") {
  console.log(String(obj2)); // Output: "[23,98,42,70]"
}

if (operation3 === "Add") {
  console.log(obj3 + obj3); // Output: 0
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
/* Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0 */
