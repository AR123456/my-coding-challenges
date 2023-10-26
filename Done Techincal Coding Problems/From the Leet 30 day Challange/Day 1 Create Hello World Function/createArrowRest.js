var createHelloWorld = function () {
  return (...args) => "Hello World";
};
/* Rest Arguments
You can use rest syntax to access all the passed arguments as an array. This isn't necessary for this problem, but it will be a critical concept for many problems. */
/* Why
It may not be immediately obvious why you would use this syntax because you can always just pass an array and get the same result.

The primary use-case is for creating generic factory functions that accept any function as input and return a new version of the function with some specific modification.

By the way, a function that accepts a function and/or returns a function is called a higher-order function, and they are very common in JavaScript.

For example, you can create a logged function factory: */
function log(inputFunction) {
  return function (...args) {
    console.log("Input", args);
    const result = inputFunction(...args);
    console.log("Output", result);
    return result;
  };
}
const f = log((a, b) => a + b);
f(1, 2); // Logs: Input [1, 2] Output 3

// spread the 2 arrays together
let c = [1, 2];
let d = [3, 4];
console.log([...c, ...d]);

function add(...args) {
  console.log(args[0] + args[1]);
}
add(1, 2);
