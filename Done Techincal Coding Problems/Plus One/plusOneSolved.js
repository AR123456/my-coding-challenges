/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Start from the least significant digit
  for (let i = digits.length - 1; i >= 0; i--) {
    // Increment the current digit
    digits[i]++;

    // If the result is less than 10, no need to carry over
    if (digits[i] < 10) {
      return digits;
    } else {
      // Carry over to the next digit
      digits[i] = 0;
    }
  }

  // If we reached here, it means there was a carry-over to the most significant digit
  // In this case, we need to add an extra digit '1' at the beginning
  digits.unshift(1);

  return digits;
};

// Test cases
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9])); // Output: [1, 0]

/* Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0]. */
