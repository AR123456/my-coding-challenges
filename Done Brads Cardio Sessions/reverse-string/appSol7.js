function reverseString(str) {
  // solve using reduce way of solving

  // console.log(str.split(""));

  console.log(
    str.split("").reduce(function (reverse, char) {
      return char + reverse;
    }, "")
  );
}

reverseString("hello");
