// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex.longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  // strip away punctuation and spaces
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  console.log(wordArr);
}
longestWord("Hi there, my name is Brad");
