/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];

  // Initialize a frequency counter for the first word
  let firstWordFreq = {};
  for (let char of words[0]) {
    if (char in firstWordFreq) {
      firstWordFreq[char]++;
    } else {
      firstWordFreq[char] = 1;
    }
  }

  // Iterate through the characters of the first word
  for (let char of Object.keys(firstWordFreq)) {
    let minCount = firstWordFreq[char];

    // Check if the character is present in all other words
    for (let i = 1; i < words.length; i++) {
      let wordFreq = {};

      // Initialize frequency counter for the current word
      for (let wChar of words[i]) {
        if (wChar in wordFreq) {
          wordFreq[wChar]++;
        } else {
          wordFreq[wChar] = 1;
        }
      }

      // Update minCount if necessary
      if (char in wordFreq) {
        minCount = Math.min(minCount, wordFreq[char]);
      } else {
        minCount = 0;
        break;
      }
    }

    // Add the character to the result array the required number of times
    for (let i = 0; i < minCount; i++) {
      result.push(char);
    }
  }

  return result;
};

// Example 1
let example1 = commonChars(["bella", "label", "roller"]);
console.log(example1); // Output: ["e","l","l"]

// Example 2
let example2 = commonChars(["cool", "lock", "cook"]);
console.log(example2); // Output: ["c","o"]
