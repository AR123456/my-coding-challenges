/* Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
Constraints:

1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
// 1 once function takes a single argument fn, which is the original function that we want to ensure is called at most once.
var once = function (fn) {
  /* called: This variable is used to keep track of whether the original function fn has been called or not. It is initialized to false because the function has not been called yet.
result: This variable will store the result of the original function fn when it is called for the first time. */
  let called = false;
  let result;
  // once function returns another function:
  /* This returned function is a closure, meaning it has access to the variables declared in the outer once function scope (i.e., called and result). It also takes a variable number of arguments using the rest parameter syntax ...args. */
  return function (...args) {
    /* Inside the returned function, the following logic is implemented:
    The condition if (!called) checks if the original function fn has not been called before (i.e., called is still false).
    */
    if (!called) {
      /* If it is the first call to the returned function (and, thus, the first call to fn), it sets called to true to indicate that the function has been called now. */
      called = true;
      /* The line result = fn(...args); calls the original function fn with the provided arguments args and stores its result in the result variable. */
      result = fn(...args);
      /*  returns the result, which is the result of the first call to the original function fn. */
      return result;
    }
    /* If the condition if (!called) is not satisfied, it means that the original function fn has already been called before. In this case, the function returns undefined: */
    return undefined;
  };
};
let fn1 = (a, b, c) => a + b + c;
let onceFn1 = once(fn1);

console.log(onceFn1(1, 2, 3)); // Output: 6
console.log(onceFn1(2, 3, 6)); // Output: undefined (fn was not called)

let fn2 = (a, b, c) => a * b * c;
let onceFn2 = once(fn2);

console.log(onceFn2(5, 7, 4)); // Output: 140
console.log(onceFn2(2, 3, 6)); // Output: undefined (fn was not called)
console.log(onceFn2(4, 6, 8)); // Output: undefined (fn was not called)

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
/* 
Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
*/
