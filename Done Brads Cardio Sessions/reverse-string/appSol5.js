function reverseString(str) {
  // for of loop
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
    console.log(reversed);
  }
  console.log(reversed);
}

reverseString("hello");
