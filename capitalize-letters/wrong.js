// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let strArr = [];
  strArr = str.split(" ");
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if ([i].length === 0) {
      i.toUpperCase();
    }
    console.log(strArr);
  }
}
capitalizeLetters("i love javascript");
