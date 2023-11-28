// CHALLENGE 2: VALIDATE A PALINDROME
//https://www.youtube.com/watch?v=M2bJBuaOeOQ
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  console.log(str.split("").reverse().join(""));
  // if (str === str.split("").reverse().join("")) {
  //   console.log("true");
  // }
  // solved with ternary
  console.log(str === str.split("").reverse().join("") ? "true" : false);
}

isPalindrome("racecar");
