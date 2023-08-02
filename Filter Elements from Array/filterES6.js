/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
0 <= arr.length <= 1000
-109 <= arr[i] <= 109
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var filteredArr = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};
const example1Arr = [0, 10, 20, 30];
const greaterThan10 = (n) => n > 10;

const example2Arr = [1, 2, 3];
const firstIndex = (n, i) => i === 0;

const example3InputArr = [-2, -1, 0, 1, 2];
const plusOne = (n) => n + 1;

const example1 = filter(example1Arr, greaterThan10);
console.log(example1); // Output: [20, 30]

const example2 = filter(example2Arr, firstIndex);
console.log(example2); // Output: [1]

const example3 = filter(example3InputArr, plusOne);
console.log(example3); // Output: [-2, 0, 1, 2]
