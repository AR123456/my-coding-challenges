// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingLetters(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the ASCII code difference between consecutive letters is greater than 1
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  // If no missing letter is found, return undefined
  return undefined;
}

// Test cases
console.log(missingLetters("abce")); // Output: "d"
console.log(missingLetters("abcdefghjklmno")); // Output: "i"
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); // Output: undefined
