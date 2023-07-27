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
  // Initialize an empty array called stack to keep track of the opening symbols encountered while processing the input string.
  const stack = [];
  // object  openSymbols maps the opening symbols to their corresponding closing symbols. For example, '(' maps to ')', '[' maps to ']', and '{' maps to '}'.
  const openSymbols = { "(": ")", "[": "]", "{": "}" };
  //  iterate through each character in the input string using a for...of loop
  for (const char of s) {
    if (openSymbols.hasOwnProperty(char)) {
      // If the character is an opening symbol, push it onto the stack
      stack.push(char);
    } else {
      // If the character is a closing symbol
      if (stack.length === 0) {
        return false; // No corresponding opening symbol in the stack
      }

      const lastSymbol = stack.pop();
      if (openSymbols[lastSymbol] !== char) {
        return false; // Closing symbol does not match the last opening symbol
      }
    }
  }

  // If there are any remaining symbols in the stack, the expression is not balanced
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
