// CHALLENGE 2: VALIDATE A PALINDROME
//https://www.youtube.com/watch?v=M2bJBuaOeOQ
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let reverseString = "";
  // need to decrement
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
    console.log(reverseString);
  }
  if (str === reverseString) {
    console.log("palidrome");
  } else {
    console.log("not a palidrome");
  }
}
isPalindrome("racecar");
