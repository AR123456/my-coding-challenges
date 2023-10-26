function reverseString(str) {
  // using a for loop and a holder var
  let reversed = "";

  for (let i = 0; i <= str.length - 1; i++) {
    // reversed += str[i];
    reversed = str[i] + reversed;
    console.log(reversed);
  }
  console.log(reversed);
  return reversed;
}

reverseString("hello");
