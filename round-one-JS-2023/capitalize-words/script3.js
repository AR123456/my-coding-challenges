/* 
## Challenge 3
**Instructions:**
Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.
**Expected Result:**
```JavaScript
const words = ['coder', 'programmer', 'developer'];
console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
``` */
const words = ["coder", "programmer", "developer"];
const capitalizedWords = words.map((word) => {
  console.log(word[0].toUpperCase() + word.slice(1));
});
