/* 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
Constraints:

-1000 <= init <= 1000
total calls not to exceed 1000 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  let count = init;

  const increment = () => {
    if (count < 1000) {
      count++;
    }
    return count;
  };

  const decrement = () => {
    if (count > -1000) {
      count--;
    }
    return count;
  };

  const reset = () => {
    count = init;
    return count;
  };

  return { increment, decrement, reset };
};

// Test cases
const counter1 = createCounter(5);
console.log(counter1.increment()); // Output: 6
console.log(counter1.reset()); // Output: 5
console.log(counter1.decrement()); // Output: 4

const counter2 = createCounter(0);
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.decrement()); // Output: 1
console.log(counter2.reset()); // Output: 0
console.log(counter2.reset()); // Output: 0
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/* Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0 */
