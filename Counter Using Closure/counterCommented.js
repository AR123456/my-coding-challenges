// * const counter = createCounter(10)
// * counter() // 10
// * counter() // 11
// * counter() // 12
// */

/**
 * @param {number} n
 * @return {Function} counter
 */
// function declaration where createCounter is assigned the value of an anonymous function that takes an argument n.
var createCounter = function (n) {
  // The outer function returns an anonymous inner function.
  return function () {
    // he inner function returns the current value of n, and then increments n by 1. The post-increment operator (n++) first returns the current value of n and then increments it.
    return n++;
  };
};

// when you call createCounter with an initial value n, it returns the inner function, which effectively becomes the counter function with its own private n. Each time you call this counter function, it will return the current value of n, and then update n to the next value (n + 1).
var counter = createCounter(10);
const resultArray = [];
for (let i = 0; i < 10; i++) {
  resultArray.push(counter());
}

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
console.log(resultArray);
