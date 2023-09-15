/**
 * @param {number} x
 * @return {number}
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
Constraints:

0 <= x <= 231 - 1
*/
var mySqrt = function (x) {
  if (x <= 1) return x; // Base case: if x is 0 or 1, return x

  let left = 1;
  let right = Math.floor(x / 2); // The square root of x will be at most x/2 for x > 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midSquared = mid * mid;

    if (midSquared === x) {
      return mid; // Found exact square root
    } else if (midSquared < x) {
      left = mid + 1; // Update left bound of search range
    } else {
      right = mid - 1; // Update right bound of search range
    }
  }

  return right; // Return the result after rounding down
};

// Test cases
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(25)); // Output: 2

/* Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned. */
