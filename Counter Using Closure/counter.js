//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// -1000 <= n <= 1000
// At most 1000 calls to counter() will be made
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let iteratedNumber = n + 1;
  const callArray = [];
  callArray.push(n);
  for (let i = 0; i < 10; i++) {
    iteratedNumber = iteratedNumber + 1;
    callArray.push(iteratedNumber);
    console.log(callArray);
    console.log(iteratedNumber);
  }
};
createCounter(2);
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {};
};
