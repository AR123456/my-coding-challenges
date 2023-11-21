function reverseString(str) {
  //for each way of solving
  let reversed = "";

  console.log(str.split(""));

  console.log(
    str.split("").forEach(function (char) {
      //
      reversed = char + reversed;
      console.log(reversed);
    })
  );
  console.log(reversed);
}

reverseString("hello");
