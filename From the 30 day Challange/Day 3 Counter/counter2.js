/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  // need to know the current count and be able to reset it
  let count = init;
  //  in the end need to return an object
  // define the methods - they all have access to init
  // could also use ES6 arrow function
  function increment() {
    // doesent need a param , already has access to init
    // increment and then return
    return ++count;
  }
  function decrement() {
    // doesent need a param , already has access to init
    // decrement and then return
    return --count;
  }
  function reset() {
    // reset count ot initial value
    count = init;
    return count;
  }
  //expose them by returning an object
  return {
    // the object
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
