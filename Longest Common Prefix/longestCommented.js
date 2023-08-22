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
/* he function longestCommonPrefix takes an array of strings strs as input and aims to find the longest common prefix among those strings. If the array is empty, it immediately returns an empty string.

The strs.sort((a, b) => a.length - b.length); line sorts the array of strings in ascending order based on their lengths. This ensures that the shortest string will be at index 0 after sorting.

const reference = strs[0]; assigns the first (shortest) string in the sorted array as the reference string that we'll compare against.

The outer loop for (let i = 0; i < reference.length; i++) iterates through each character of the reference string.

Inside the outer loop, we extract the current character const char = reference[i];.

The inner loop for (let j = 1; j < strs.length; j++) iterates through each string in the array, starting from the second string.

The conditional if (strs[j][i] !== char) checks if the character at the same position in the current string (strs[j][i]) is different from the current character in the reference string. If a character mismatch is found, it means the common prefix ends here, and we return the substring of the reference string up to the current position i using reference.slice(0, i).

If no mismatch is found during the inner loop, the common prefix continues, and we move to the next character.

After both loops complete, if no mismatches were found, the entire reference string is the common prefix, so we return reference.

In summary, the code sorts the array of strings based on their lengths, takes the shortest string as a reference, and iterates through its characters while comparing them with the corresponding characters in the other strings. It returns the common prefix as soon as a mismatch is found or the entire reference string if no mismatches are found. This approach leverages the fact that the shortest string can potentially have the longest common prefix with the other strings. */
