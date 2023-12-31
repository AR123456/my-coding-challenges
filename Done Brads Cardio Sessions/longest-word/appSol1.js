// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex.longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word

function longestWord(sen) {
  // strip away punctuation and spaces
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  console.log(wordArr);
  // sort by length using sort method
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
  console.log(sorted);
  return sorted[0];
}
longestWord("Hi there, my name is Brad");
