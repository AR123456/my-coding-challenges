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
/** 1 Function Definition:
The code starts by defining a function called filter. This function takes two arguments:
arr: An array of integers that needs to be filtered.
fn: A filtering function that takes one or two arguments (arr[i] - number from the array, and i - index of arr[i]). The function returns a truthy value if the element should be included in the filtered array. */
var filter = function (arr, fn) {
  /* 2 Filtering Logic:
The filter function initializes an empty array called filteredArr, which will be used to store the elements that pass the filtering condition */
  var filteredArr = [];
  /*3 Iterating through the Input Array:
The function then iterates through the input array arr using a for loop with the variable i  */

  for (var i = 0; i < arr.length; i++) {
    /* 4 Applying the Filtering Function:
Inside the loop, the filtering function fn is called with the arguments arr[i] and i, i.e., fn(arr[i], i). If the return value of the filtering function is truthy (when Boolean(fn(arr[i], i)) is true), it means the element should be included in the filtered array. */
    if (fn(arr[i], i)) {
      /* 5 Adding Elements to Filtered Array:
If the filtering function returns a truthy value, the element arr[i] is added to the filteredArr using the filteredArr.push(arr[i]) statement. */
      filteredArr.push(arr[i]);
    }
  }
  /* 6 Return the Filtered Array:
After iterating through the entire input array, the filter function returns the filteredArr containing the elements that passed the filtering condition. */
  return filteredArr;
};
