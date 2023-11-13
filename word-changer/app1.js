// problem solve // CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
let str = "hello there";
function letterChanges(str) {
  // use replace and pass in regular expression
  let newStr = str.replace(/[a-z]/gi, function (char) {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      // gets charcode at next letter
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  console.log(newStr);
}
letterChanges(str);
