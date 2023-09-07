/* The ArrayWrapper class is defined. It takes an array of integers (nums) as a parameter in its constructor. The constructor initializes the instance's nums property with the provided array. */

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  // Define a custom method to calculate the sum of elements
  /* The calculateSum method is defined. It uses the reduce method on the nums array to calculate the sum of all its elements. */
  calculateSum() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  // Define the addition operator (+) for instances of ArrayWrapper
  // This will return the sum of elements from both instances
  /* The valueOf method is defined. This method is used to override the behavior of the + operator when used with instances of the ArrayWrapper class. It returns the result of calling the calculateSum method, effectively calculating the sum of elements when instances are added together with the + operator. */
  valueOf() {
    return this.calculateSum();
  }

  // Define the toString method to return the formatted string
  /* The toString method is defined. This method is used to override the default behavior of the toString function, which is automatically called when an object is converted to a string (e.g., using String(obj)). The toString method returns a formatted string containing the elements of the nums array, separated by commas and enclosed in square brackets. */
  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

// Example 1
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
const result1 = obj1 + obj2;
console.log(result1); // Output: 10

// Example 2
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
const result2 = String(obj3);
console.log(result2); // Output: "[23,98,42,70]"

// Example 3
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
const result3 = obj4 + obj5;
console.log(result3); // Output: 0
