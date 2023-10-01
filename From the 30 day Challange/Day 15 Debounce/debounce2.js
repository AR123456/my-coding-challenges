/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let id;
  return function (...args) {
    clearTimeout(id); // undefined is ok here - like on first call
    setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
/* Debounce is about delaying an execution or preventing an operation from happening multiple times in a time span
for example not making a double payment or order on a website 

*/
