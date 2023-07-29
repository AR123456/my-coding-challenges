// * const counter = createCounter(10)
// * counter() // 10
// * counter() // 11
// * counter() // 12
// */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
var counter = createCounter(10);
const resultArray = [];
for (let i = 0; i < 10; i++) {
  resultArray.push(counter());
}

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
console.log(resultArray);
