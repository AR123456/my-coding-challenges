/**Given two binary strings a and b, return their sum as a binary string.
 * Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  // Initialize an empty string result to store the final sum.
  let result = "";
  // Initialize a carry variable to keep track of any carry that needs to be added to the next position.
  let carry = 0;
  // Initialize two pointers i and j to the end of the input strings a and b respectively.
  let i = a.length - 1;
  let j = b.length - 1;
  // Use a while loop to iterate through the strings from right to left.
  while (i >= 0 || j >= 0) {
    // Inside the loop, calculate the sum of the current digits along with the carry.
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--]);
    if (j >= 0) sum += parseInt(b[j--]);
    // Append the least significant bit of the sum to the result string.
    result = (sum % 2) + result;
    // Update the carry for the next iteration.
    carry = Math.floor(sum / 2);
  }
  // If there is a carry remaining after the loop, append it to the beginning of the result string.
  if (carry > 0) {
    result = carry + result;
  }
  // Finally, return the resulting binary string.
  return result;
};

/* Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101" */
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
