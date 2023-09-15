/**
 * iven two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
onstraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = new Array(26).fill(0); // Assuming lowercase English letters

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - "a".charCodeAt(0)]++; // Increment count for character in s
    charCount[t.charCodeAt(i) - "a".charCodeAt(0)]--; // Decrement count for character in t
  }

  for (let count of charCount) {
    if (count !== 0) {
      return false; // If any count is non-zero, strings are not anagrams
    }
  }

  return true; // If all counts are zero, strings are anagrams
};

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

/* G

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

C */
