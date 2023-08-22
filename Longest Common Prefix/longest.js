/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  // Sort the array to ensure that the shortest string is at index 0
  strs.sort((a, b) => a.length - b.length);

  // Take the shortest string as the reference
  const reference = strs[0];

  for (let i = 0; i < reference.length; i++) {
    const char = reference[i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return reference.slice(0, i);
      }
    }
  }

  return reference;
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

/* Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */
