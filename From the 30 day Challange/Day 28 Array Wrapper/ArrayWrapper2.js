/**
 * @param {number[]} nums
 * @return {void}
 */
// making this a class
var ArrayWrapper = function (nums) {
  // set the array of numbers to a  member variable - this is what makes it a class
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  // get the sum of the array - useing reduce
  // pass in function and accumulator store answer in accumulator
  return this.nums.reduce((acc, num) => acc + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  // put this.nums into the correcto format
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // Output: 10
console.log(String(obj1)); // Output: "[1,2]"
console.log(String(obj2)); // Output: "[3,4]"
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
