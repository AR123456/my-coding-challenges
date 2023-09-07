/**
 * Given an integer x, return true if x is a 
palindrome , and false otherwise.

Constraints:

-231 <= x <= 231 - 1
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // cannot be negative or end in )
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false; // Negative numbers and numbers ending in 0 are not palindromes
  }
  // Initialize variables for reversing the number
  let reversedNumber = 0;
  let originalNumber = x;
  let iteration = 1;

  // Reverse the number using a loop
  while (x > 0) {
    const digit = x % 10; // Extract the last digit of the number
    reversedNumber = reversedNumber * 10 + digit; // Build the reversed number
    x = Math.floor(x / 10); // Remove the last digit from the original number
    // Print the current iteration, digit, and reversed number
    console.log(
      `Iteration ${iteration}: x = ${x}, digit = ${digit}, reversedNumber = ${reversedNumber}`
    );
    iteration++; // Increment the iteration counter
  }

  // Compare the reversed number with the original number
  return originalNumber === reversedNumber;
};

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

/* Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Def of Palindromic number - A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number (such as 16461) that remains the same when its digits are reversed. In other words, it has reflectional symmetry across a vertical axis


*/
