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
//  iterate through the input array and apply the filtering function to each element. If the function returns a truthy value for an element, we add that element to the filteredArr
var filter = function (arr, fn) {
  var filteredArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};
// use this filter function to filter the elements of an array based on a custom filtering function.
// test cases
var example1Arr = [0, 10, 20, 30];
var greaterThan10 = function (n) {
  return n > 10;
};

var example2Arr = [1, 2, 3];
var firstIndex = function (n, i) {
  return i === 0;
};

var example3InputArr = [-2, -1, 0, 1, 2];
var plusOne = function (n) {
  return n + 1;
};

var example1 = filter(example1Arr, greaterThan10);
console.log(example1);
var example2 = filter(example2Arr, firstIndex);
console.log(example2);
var example3 = filter(example3InputArr, plusOne);
console.log(example3);
