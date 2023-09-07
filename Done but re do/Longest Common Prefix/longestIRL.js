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
/* Yes, the concept of finding the longest common prefix among a list of strings has real-life use cases, especially in fields related to string manipulation, text processing, and algorithms. Here are a few scenarios where you might encounter this problem:

1. **Autocomplete and Search Suggestions:** In applications like search engines and text editors, you might want to provide autocomplete suggestions based on user input. Finding the longest common prefix among a list of potential suggestions can help generate accurate and relevant suggestions.

2. **File and Directory Paths:** When dealing with file systems or URLs, you might need to find the common prefix among a list of file paths or URLs. This can be useful for organizing and categorizing data.

3. **DNA Sequences:** In bioinformatics, DNA sequences often share a common prefix, which might represent a significant genetic trait or sequence. Identifying this common prefix can help researchers understand genetic relationships and patterns.

4. **Version Control Systems:** In version control systems like Git, when you're dealing with branches and commits, you might want to find the common base path of different branches to understand their history and relationships.

5. **Domain Names:** Domain names on the internet can share a common prefix, particularly in subdomains. Analyzing this common prefix can help identify related websites or services.

6. **String Compression and Encoding:** In compression algorithms, finding a common prefix among a set of strings can be used to optimize storage or transmission by representing the shared prefix only once.

7. **Spelling Correction:** When implementing spelling correction or fuzzy search, finding the longest common prefix can help identify the intended word despite minor typos or errors.

8. **Natural Language Processing:** In text analysis and processing, finding the longest common prefix can be useful for identifying common prefixes in phrases or sentences, potentially aiding in language understanding tasks.

These are just a few examples, but the idea of finding the longest common prefix can be applicable in various scenarios where you're dealing with a collection of strings and need to identify shared patterns or relationships among them. */
