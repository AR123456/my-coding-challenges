/**
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
 * @return {Function}
 */
const createHelloWorld = function () {
  // return another function
  return function (...args) {
    return "Hello World";
  };
};
// this is how the progra will be executed
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
