// CHALLENGE 2: VALIDATE A PALINDROME
//https://www.youtube.com/watch?v=M2bJBuaOeOQ
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < str.length; i++) {
    array1.push(str[i]);
    array2 = array1.reverse();
  }

  console.log(array1);
  console.log(array2);
  // push str into array
  // use array reverse method to push to new array
  // check if array one and two match check if
}
isPalindrome("hello");
