/**
 * @param {number} n
 * @return {number}
 */
// calculate the nth Fibonacci number
var fib = function (n) {
  if (n <= 1) {
    // checking if n is less than or equal to 1 and returns n in that case, as F(0) = 0 and F(1) = 1
    return n;
  }

  let fibPrevPrev = 0;
  let fibPrev = 1;

  for (let i = 2; i <= n; i++) {
    /* For n greater than 1, loop to calculate the Fibonacci numbers up to n.Keepp track of the previous two Fibonacci numbers (fibPrevPrev and fibPrev) and iteratively update them to calculate the next Fibonacci number. */
    let currentFib = fibPrevPrev + fibPrev;
    fibPrevPrev = fibPrev;
    fibPrev = currentFib;
  }

  return fibPrev;
};

// Example Usage
let result1 = fib(2);
console.log(result1); // Output: 1

let result2 = fib(3);
console.log(result2); // Output: 2

let result3 = fib(4);
console.log(result3); // Output: 3
