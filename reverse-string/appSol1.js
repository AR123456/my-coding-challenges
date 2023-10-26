function reverseString(str) {
  // put the string into an array - dont use space in the parens as that would split on word
  console.log(str.split(""));
  // use the array prototype method to reverse
  console.log(str.split("").reverse());
  // turn the array back into a string
  console.log(str.split("").reverse().join(""));
}

reverseString("hello");
