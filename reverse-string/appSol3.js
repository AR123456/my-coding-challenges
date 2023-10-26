function reverseString(str) {
  // using recusion - this  is not a desireable solution - supper slow
  //   The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
  console.log(str.substr(1));
  //   The charAt() method returns the specified character from a string.
  console.log(str.charAt(1));
  if (str === "") {
    return "";
  } else {
    console.log(reverseString(str.substr(1) + str.charAt(0)));
  }
}

reverseString("hello");
