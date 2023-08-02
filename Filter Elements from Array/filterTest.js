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

arr = arr = [0, 10, 20, 30];
filteredArr = [];
const greaterThan10 = (n) => {
  return n > 10;
};
var filter = function (arr, fn) {
  // filter out values that are not greater than 10
  for (let i = 0; i < arr.length; i++) {
    // console.log(greaterThan10(arr[i]));
    if (greaterThan10(arr[i])) {
      filteredArr.push(arr[i]);
      console.log(filteredArr);
    }
  }
};

filter(arr);
