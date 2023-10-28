// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
// https://stackoverflow.com/questions/51146294/reverse-a-number-without-making-it-a-string-in-javascript
function reverseInt(int) {
  let revString = int.toString().split("").reverse().join("");
  revString = parseInt(revString) * Math.sign(int);
  console.log(revString);
}

reverseInt(-123);
