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
/* var lengthOfLastWord = function(s): This line defines a JavaScript function named lengthOfLastWord that takes a single argument s. This function is written in the form of an anonymous function expression and is assigned to the variable lengthOfLastWord. */
var lengthOfLastWord = function (s) {
  // Trim leading and trailing spaces
  /* s = s.trim();: This line trims the input string s. The trim() function removes any leading or trailing spaces from a string. In this case, it ensures that any extra spaces before or after the words in the string are removed. */
  s = s.trim();

  // Split the string into an array of words
  /* var words = s.split(' ');: This line splits the trimmed string s into an array of words. It uses the split(' ') function, which separates the string into an array of substrings based on spaces (' '). For example, if s is "Hello World", words will be ["Hello", "World"]. */
  var words = s.split(" ");

  // Return the length of the last word
  /* return words[words.length - 1].length;: This line returns the length of the last word in the array words.

words[words.length - 1] accesses the last element in the words array. This corresponds to the last word in the original string.

.length retrieves the length of that last word */
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
