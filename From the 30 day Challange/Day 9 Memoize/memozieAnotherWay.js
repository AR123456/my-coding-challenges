/**
 * @param {Function} fn
 */
//////////////Decorator Design pattern - kind of like object oriented programing
// this wrapper function will get a function that will only be run once
// add state to inner function
function memoize(fn) {
  // store the result of the function call so no need to re compute in future
  let cache = {};
  return function (...args) {
    // check cache - was this function called before?
    // this is an object so have to stringify
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    // call the function
    cache[key] = fn(...args);
    return cache[key];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
