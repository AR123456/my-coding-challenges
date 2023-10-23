/**
 * @param {string[]} words
 * @return {string[]}
 */
const words = ["bella", "label", "roller"];
const output = [];
var commonChars = function (words) {
  let letterArray = words.join("").split("");
  compareArrays(letterArray, output);
  function compareArrays(letterArray, output) {
    for (let i = 0; i < letterArray.length; i++) {
      if (!output.includes(letterArray[i])) {
        output.push(letterArray[i]);
      }
    }
    console.log(output);
  }
};
commonChars(words);
