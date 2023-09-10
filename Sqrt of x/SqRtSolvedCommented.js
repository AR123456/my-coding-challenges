/**
 * @param {number} x
 * @return {number}
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
Constraints:

0 <= x <= 231 - 1
*/
// The function mySqrt is defined with x as the parameter.
var mySqrt = function (x) {
  // The first conditional statement checks if x is less than or equal to 1. If it is, the function immediately returns x because the square root of 0 or 1 is the number itself.
  if (x <= 1) return x; // Base case: if x is 0 or 1, return x
  /* If x is greater than 1, the function proceeds with the binary search approach. */
  /* left is initialized to 1 because the square root of any number is at least 1. */
  let left = 1;
  /* right is initialized to Math.floor(x / 2), which is the largest possible square root for x greater than 1. */
  let right = Math.floor(x / 2); // The square root of x will be at most x/2 for x > 1
  /* The while loop runs as long as left is less than or equal to right. This loop is used for binary search. */
  while (left <= right) {
    /* mid is calculated as the floor value of the average of left and right. This gives us the midpoint of the current search range.

midSquared is calculated as the square of mid. */
    let mid = Math.floor((left + right) / 2);
    let midSquared = mid * mid;
    /* If midSquared is equal to x, we have found the exact square root, so we return mid. */
    if (midSquared === x) {
      return mid; // Found exact square root
      /* If midSquared is less than x, it means the current midpoint is too small, so we need to adjust the search range. We update left to mid + 1 to focus on the right half of the search range. */
    } else if (midSquared < x) {
      /* If midSquared is greater than x, it means the current midpoint is too large. We update right to mid - 1 to focus on the left half of the search range. */
      left = mid + 1; // Update left bound of search range
    } else {
      /* After the while loop, if the exact square root is not found, we return right. This will be the result after rounding down. */
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
