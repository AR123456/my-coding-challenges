// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex.longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  // strip away punctuation and spaces
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // console.log(wordArr);
  // sort by length using sort method
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
  // console.log(sorted[0]);
  // if multiple words are longest , put them in an array and compare using filter method
  const longestWordArr = sorted.filter(function (word) {
    return word.length === sorted[0].length;
  });

  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  // check for more than one long return the word
  if (longestWordArr.length === 1) {
    console.log(longestWordArr[0]);
    return longestWordArr[0];
  } else {
    console.log(longestWordArr);
    return longestWordArr;
  }
}
longestWord("Hello there, my name is Anne");
