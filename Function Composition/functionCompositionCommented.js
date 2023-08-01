//

/**
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer


 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  // The inner function is returned as the result of the compose function
  // the compose function that takes an array of functions as input and returns a new function as output. This returned function is the composition of all the functions in the input array.
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));

// https://www.youtube.com/watch?v=mIFw1H7Ljco  this guy uses for loop to solve
