// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i]);
    // console.log(strArr[i].substring(0, 1));
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  console.log(strArr.join(" "));
}
capitalizeLetters("i love javascript");
