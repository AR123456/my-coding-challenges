/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only
 1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Trim leading and trailing spaces
  s = s.trim();

  // Split the string into an array of words
  var words = s.split(" ");

  // Return the length of the last word
  return words[words.length - 1].length;
};
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6

/* Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6. */
