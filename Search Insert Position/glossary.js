// Sample glossary data (sorted alphabetically)
const glossary = [
  {
    word: "apple",
    definition: "A round fruit with red or green skin and crisp flesh.",
  },
  {
    word: "banana",
    definition: "A long, curved fruit with yellow skin and soft, sweet flesh.",
  },
  {
    word: "cherry",
    definition: "A small, round fruit that is typically red or black.",
  },
  { word: "grape", definition: "A small, sweet, and juicy fruit." },
  {
    word: "orange",
    definition:
      "A round citrus fruit with a tough orange skin and juicy, sweet flesh.",
  },
];

// Function to search or insert a word in the glossary
function searchDictionary(word) {
  let left = 0;
  let right = glossary.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (glossary[mid].word === word) {
      // Word found, return its definition
      return glossary[mid].definition;
    } else if (glossary[mid].word < word) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // If the loop finishes without finding the word, 'left' will be the index
  // where the word should be inserted.
  const insertIndex = left;

  // Insert the word and return a message
  const newWordEntry = { word, definition: "Definition not found." };
  glossary.splice(insertIndex, 0, newWordEntry);
  return `${word} has been added to the glossary with the definition: "${newWordEntry.definition}"`;
}

// Example usage:
const wordToSearch = "banana";
const result = searchDictionary(wordToSearch);
console.log(result); // Output: "A long, curved fruit with yellow skin and soft, sweet flesh."

const newWord = "kiwi";
const insertionResult = searchDictionary(newWord);
console.log(insertionResult); // Output: "kiwi has been added to the glossary with the definition: "Definition not found.""

console.log(glossary); // Updated glossary with the new word
