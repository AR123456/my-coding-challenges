function reverseString(str) {
  // using a for loop and a holder var
  let reversed = "";
  //   start the loop at the last index position and keep going backwards
  // start at str.length-1 because array indexes start at 0
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    console.log(reversed);
  }
  console.log(reversed);
  return reversed;
}

reverseString("hello");
