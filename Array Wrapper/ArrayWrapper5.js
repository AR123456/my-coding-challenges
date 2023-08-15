class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.flat().reduce((sum, num) => sum + num, 0);
  }

  toString() {
    return "[" + this.nums[0].join(",") + "]";
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
  console.log(obj1 + obj1); // Output: 10
}

if (operation2 === "String") {
  console.log(String(obj2)); // Output: "[23,98,42,70]"
}

if (operation3 === "Add") {
  console.log(obj3 + obj3); // Output: 0
}
