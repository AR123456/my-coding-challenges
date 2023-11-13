// This code uses the Array.from method to generate arrays of upper case and lower case alphabets, and then it concatenates them to create the final array containing both upper case and lower case letters.
// Array of the alphabet in upper case
var uppercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

// Array of the alphabet in lower case
var lowercaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

// Combine both arrays
var alphabet = uppercaseAlphabet.concat(lowercaseAlphabet);

console.log(alphabet);
