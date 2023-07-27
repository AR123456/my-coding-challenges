/**
 *Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s
 * @return {boolean}
 */
// s = "{}[]";

var isValid = function (s) {
  const stack = [];
  const openSymbols = { "(": ")", "[": "]", "{": "}" };
  for (const char of s) {
    if (openSymbols.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const lastSymbol = stack.pop();
      if (openSymbols[lastSymbol] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// Example 1
const inputString1 = "{[()]}";
const result1 = isValid(inputString1);
console.log(result1); // Output: true

// Example 2
const inputString2 = "{[(])}";
const result2 = isValid(inputString2);
console.log(result2); // Output: false

// Example 3
const inputString3 = "()[]{[()]}";
const result3 = isValid(inputString3);
console.log(result3); // Output: true
