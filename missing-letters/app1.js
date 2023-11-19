// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(input) {
  // create array of letters of the alphabet
  let alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
  console.log(alphabet);
  // take in the string of letters , make it an array
  inputArr = Array.from(input);
  // loop the array of input and compare to alphabet
  for (let i = 0; i < inputArr.length; i++) {
    console.log(inputArr.every());
  }
  // if the letter of the input matches the value and position of the input string go on to next letter
  // if it does not then return the unmatched letter from the alphabet
  // if everything matches return undefined
}
missingLetters("abce");
////
