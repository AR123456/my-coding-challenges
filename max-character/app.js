// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // look at key value pairs and how many are inside
  const charMap = {};
  const maxNum = 0;
  const maxChar = "";

  // make string array, loop it and increment the chars
  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      // has not been found, make it one
      charMap[char] = 1;
    }
    // console.log(charMap);
  });
  //   now have the char map which is an object with key (letter) , value (how may times)
  // find the key value pair with the highest value
  // the for in loops an object
  for (let char in charMap) {
  }
}

maxCharacter("javascript");
