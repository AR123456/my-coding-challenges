/**
 * Given an integer x, return true if x is a 
palindrome , and false otherwise.

Constraints:

-231 <= x <= 231 - 1
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  xrev = Number(x.toString().split("").reverse().join(""));

  if (x === xrev) {
    return true;
  } else {
    return false;
  }
};

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
