/**
 * @param {Function} fn
 * @return {Function}
 */
// take in a single param a function
var once = function (fn) {
  // return a function \
  // need to remember something we need to manage state- can achieve with closure
  let called = false; // will update this when function is called to true, is a member variable and will stored persistantly on subsequent calls
  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
};

/// use this way

// let fn = (a, b, c) => a + b + c;
// // higher order function the result of calling once()
// let onceFn = once(fn);

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn

/// once is a wrapper function that accepts a function and the return value will be the function we passed in only one time
