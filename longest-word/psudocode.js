// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex.longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  words = sen.split(" ");
  for (const word in words) {
    if (Object.hasOwnProperty.call(words, word)) {
      const element = words[word];
    }
  }
  longestWord("Hi there, my name is Brad");
}
