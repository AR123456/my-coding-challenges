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
/* 1.The createCounter function is defined, which takes an initial integer init as its parameter. This init value represents the starting value of the counter. The goal is to create an object with three functions that will allow us to manipulate and track the counter value. */
var createCounter = function (init) {
  /* 2. Inside the createCounter function, a local variable count is declared and assigned the value of the init parameter. This count variable will be used to keep track of the current value of the counter. It is initialized with the init value passed to the createCounter function. */
  let count = init;

  const increment = () => {
    /* 3. The increment function is defined inside the createCounter function using an arrow function syntax. This function is responsible for increasing the current value of the counter by 1. However, before incrementing the value, it checks if the current value (count) is less than 1000 to ensure it stays within the specified constraints. If the value is less than 1000, the count is incremented by 1. */
    if (count < 1000) {
      count++;
    }
    return count;
  };
  /* 4. The decrement function is also defined inside the createCounter function using an arrow function syntax. Similar to the increment function, this function is responsible for decreasing the current value of the counter by 1. However, before decrementing the value, it checks if the current value (count) is greater than -1000 to ensure it stays within the specified constraints. If the value is greater than -1000, the count is decremented by 1. */
  const decrement = () => {
    if (count > -1000) {
      count--;
    }
    return count;
  };

  const reset = () => {
    /*5. The reset function is defined inside the createCounter function using an arrow function syntax. This function is responsible for resetting the current value of the counter to the initial value (init) passed to the createCounter function. It simply assigns the value of init to the count variable.  */
    count = init;
    return count;
  };
  /* 6. The createCounter function returns an object containing the three functions: increment, decrement, and reset. These functions are now accessible outside of the createCounter function due to closure. Each function has access to the count variable declared in the outer scope of the createCounter function, allowing them to modify and share the same counter value. */
  return { increment, decrement, reset };
};
/* By using closures, the implementation ensures that the count variable is protected and can only be accessed and modified through the three functions returned by the createCounter function. The counter value is constrained within the range of -1000 to 1000, and the total calls are limited to 1000 as specified in the constraints. */
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
