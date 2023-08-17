/**
 * @return {Function}
 */
var createHelloWorld = function () {
  /* Inside createHelloWorld, we return an inner function using the return keyword. This inner function is defined using the function(...args) syntax, which means it can accept any number of arguments using the rest parameter syntax (...args). */
  return function (...args) {
    // Inside the inner function, we simply return the string "Hello World".
    return "Hello World";
  };
};
/*In this implementation, the createHelloWorld function returns an inner function that always returns "Hello World", regardless of any arguments passed to it. The closure captures the "Hello World" value from the outer function and retains it whenever the inner function is called. */

// **********************************Testing the function
/* We create a variable f and assign it the result of calling createHelloWorld(). This means f now holds the inner function that was returned by createHelloWorld.

We call f() (with empty parentheses) to execute the inner function. Since the inner function always returns "Hello World", when we log the result to the console, we get the output "Hello World". */
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"

/* We call f() again, but this time we're passing three arguments: an empty object {}, null, and the number 42.

However, the inner function defined inside createHelloWorld completely ignores the arguments it receives and always returns "Hello World".

Therefore, no matter what arguments are passed to the inner function, it always returns "Hello World".

The main concept here is the use of closures. The inner function returned by createHelloWorld "remembers" the context in which it was created, including the fact that it always returns "Hello World". This behavior is independent of the arguments passed to the inner function. */
// Additional testing with arguments
console.log(f({}, null, 42)); // Output: "Hello World"

/**
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
/* Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World". */
