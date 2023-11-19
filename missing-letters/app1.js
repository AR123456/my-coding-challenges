// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  // compare is the character code at the position passed into the charCodeAt method
  let compare = str.charCodeAt(0);
  let missing;
  // make into array
  str.split("").map((char, i) => {
    // map is similar to foreach but it  returns an array, not just a loop
    // compare to char code of index
    if (str.charCodeAt(i) == compare) {
      // this is true so increment
      ++compare;
    } else {
      // the character code is missing so put into the missing variable
      // string constructor , pass in compare so we get the actual letter
      missing = String.fromCharCode(compare);
    }
  });
  console.log(missing);
}
missingLetters("abce");
