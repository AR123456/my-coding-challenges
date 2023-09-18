/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  // inner function has access to vars outside of it
  return function () {
    // have n in here
    // on the first run through return n then increment
    // on second run return 11 and ++
    // on third run return 12 and ++
    return n++;
    // n is like a hidden state or private variable
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//  could also solve this way- make it look a little more like object oriented.
// var createCounter = function (n) {
//   let count = n;
//   return function () {
//     return count++;
//   };
// };

// or use ES6 Class
class Counter {
  constructor(n) {
    // use this to make a member variable
    this.n = n;
  }
  increment() {
    return ++this.n;
  }
}
// create a counter  using the Counter constructor
const counter = Counter(10);
counter.increment();
