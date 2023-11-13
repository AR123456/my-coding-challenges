// problem solve // CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
str = "hello there";

function letterChanges(str) {
  alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === alphabet[i]) {
      console.log("match");
    }
    // console.log(str.charAt(i));
  }

  // create a holer array for the outpust
  let output = [];
  // use for loop if the letter at the index is in the alpha bit array replace it with the letter a the next index, push that in to the holder array

  // if it is a space just push the space
}
letterChanges(str);
