// CHALLENGE 2: VALIDATE A PALINDROME
//https://www.youtube.com/watch?v=M2bJBuaOeOQ
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  //  turn string into array , revers it and turn back into a string
  const revString = str.split("").reverse().join("");
  console.log(revString);
  console.log(revString === str);
  return revString === str;
}
isPalindrome("racecar");
