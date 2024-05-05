// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  str = str.toLowerCase();

  let strArr = str.split(" ");
  //   console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i].charAt().toUpperCase() + str[i].slice(1));
    strArr = strArr[i].charAt().toUpperCase() + str[i].slice(1);
  }
  console.log(strArr);
}
capitalizeLetters("i love Javascript");
