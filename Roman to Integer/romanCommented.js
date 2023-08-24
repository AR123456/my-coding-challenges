/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  //   The for loop iterates through each character of the input string s, starting from the first character (index 0) and ending at the last character (index s.length - 1).
  for (let i = 0; i < s.length; i++) {
    /* Inside the loop, the if statement checks whether the current character and the next character (if it exists) form a subtraction case, where a smaller numeral appears before a larger numeral to denote subtraction (e.g., IV for 4, IX for 9, etc.). This is a key property of Roman numerals.

i + 1 < s.length: This condition ensures that we're not at the last character of the string (since we need to check the next character).

romanToValue[s[i]] < romanToValue[s[i + 1]]: This condition checks if the current Roman numeral's value is less than the value of the next Roman numeral. If this is true, it means that a subtraction case is present. */
    // ////// is a smaller number before a larger number ??
    if (i + 1 < s.length && romanToValue[s[i]] < romanToValue[s[i + 1]]) {
      /* this is a subtraction case so  subtract the value of the current Roman numeral from the total. This accounts for the subtraction in cases like IV (4), where I is subtracted from V.*/
      total -= romanToValue[s[i]];
    } else {
      /* this is not a subtraction case so t means that the current Roman numeral does not involve subtraction. In this case, we simply add the value of the current Roman numeral to the total. */
      total += romanToValue[s[i]];
    }
  }
  return total;
};
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
/* Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */
