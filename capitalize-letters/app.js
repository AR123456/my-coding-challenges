// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // using Map

  const answer = str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      //   console.log(word);
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
  console.log(answer);
}
capitalizeLetters("i love javascript");
