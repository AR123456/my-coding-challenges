/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// stratefy design pattern - open closed principle that is closed to change , open for extention  ( by passing in a different function  )
var map = function (arr, fn) {
  const res = [];
  for (const i in arr) {
    // i = index when written this way, not the vaule
    // pass in the element array at index i  and the index itself
    // fn(arr[i], i);
    // return in the form of an array
    // push - append to the end of array
    // note the index of the array is a string, not an integer
    // res.push(fn(arr[i], i));
    // need to cast into a number
    res.push(fn(arr[i], Number(i)));
  }
  return res;
};
// passing an function into a function is a strategy design pattern -talked about in object oriented programming but also applies to functional and procedural programming like this.
// flexability to pass in a function that could be changed later
