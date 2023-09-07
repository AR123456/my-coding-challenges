class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  // Define a custom method to calculate the sum of elements
  calculateSum() {
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  // Define the addition operator (+) for instances of ArrayWrapper
  // This will return the sum of elements from both instances
  valueOf() {
    return this.calculateSum();
  }

  // Define the toString method to return the formatted string
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
