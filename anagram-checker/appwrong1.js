// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
// this really only checks that str1 contains same chars as str2 - it may not be a real word
let str1 = "elbow";
let str2 = "below";
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    console.log("False");
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] != str2[i]) console.log("False");
    }
  }
}
isAnagram(str1, str2);
