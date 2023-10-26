/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {};
};
///////////////////////////////////////////////////- this is what needs to be done
// this is an async function (because it is a Promise) because we do not need the await before the return do not have to use the async await syntax
function fn(t) {
  return new Promise((res) => setTimeout(res, t));
}
/// passing fn in but can only run for 100 ms- note limited is a function that we can then call passing in a value -t
const limited = timeLimit(fn, 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// Like an API call taking too long
// return with a string so there is a useful message
