// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
// this really only checks that str1 contains same chars as str2 - it may not be a real word
let str1 = "Dormitory";
let str2 = "dirty room##";
function isAnagram(str1, str2) {
  // strip case, spaces and punctuation
  // split into array
  // sort array and join it back for comparison
  if (
    str1.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("") ===
    str2.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  ) {
    console.log("true");
  } else {
    console.log("false ");
  }
}
// helper to format the strings in the end will be all lower case and in alphabetical order
function formatStr(str) {
  console.log(str.replace(/[^\w]/g, ""));
  console.log(str.replace(/[^\w]/g, "").toLowerCase());
  console.log(str.replace(/[^\w]/g, "").toLowerCase().split(""));
  console.log(str.replace(/[^\w]/g, "").toLowerCase().split("").sort());
  console.log(
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
}
isAnagram(str1, str2);

// formatStr(str1);
// formatStr(str2);
