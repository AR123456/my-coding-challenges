/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
//  function called map that takes two parameters
/* 1 arr: This is an input array of integers. It represents the array on which the mapping function will be applied.
2 fn: This is the mapping function that will be applied to each element of the input array. The fn function takes two parameters:
n: This represents an element of the input array arr.
i: This represents the index of the element n in the input array arr. */
var map = function (arr, fn) {
  /* The map function creates an empty array called transformedArray, which will store the transformed values obtained after applying the mapping function to each element of the input array. */
  const transformedArray = [];
  /* Then, it starts a loop using for to iterate through each element of the input array. Inside the loop, the fn mapping function is called with the current element arr[i] and its corresponding index i, and the result is stored in the variable transformedValue. */
  for (let i = 0; i < arr.length; i++) {
    const transformedValue = fn(arr[i], i);
    /* The transformedValue is then pushed into the transformedArray using the push method, adding the transformed value to the end of the array. */
    transformedArray.push(transformedValue);
  }
  /* After the loop finishes iterating over all elements in the input array, the transformedArray is now filled with the transformed values, and it is returned as the final output of the map function. */
  return transformedArray;
  /* In summary, the map function takes an array and a mapping function, applies the mapping function to each element of the array along with its index, and returns a new array containing the transformed values. This implementation replicates the behavior of the built-in Array.map method, but it avoids using the built-in method itself. */
};

//////////////running the examples /////////////
const arr1 = [1, 2, 3];
const plusone = function (n) {
  return n + 1;
};

const result1 = map(arr1, plusone);
console.log(result1); // Output: [2, 3, 4]
const arr2 = [1, 2, 3];
const plusI = function (n, i) {
  return n + i;
};

const result2 = map(arr2, plusI);
console.log(result2); // Output: [1, 3, 5]
const arr3 = [10, 20, 30];
const constant = function () {
  return 42;
};

const result3 = map(arr3, constant);
console.log(result3); // Output: [42, 42, 42]

/*Example 1:
  
  Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
  Output: [2,3,4]
  Explanation:
  const newArray = map(arr, plusone); // [2,3,4]
  The function increases each value in the array by one. 
  Example 2:
  
  Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
  Output: [1,3,5]
  Explanation: The function increases each value by the index it resides in.
  Example 3:
  
  Input: arr = [10,20,30], fn = function constant() { return 42; }
  Output: [42,42,42]
  Explanation: The function always returns 42.  */
