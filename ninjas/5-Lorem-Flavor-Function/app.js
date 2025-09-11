// buttons, textarea and output
const inputText = document.querySelector("textarea");
const textOut = document.querySelector(".text-output");
const summerButton = document.querySelector("#summer");
const natureButton = document.querySelector("#nature");
const musicButton = document.querySelector("#music");
let pastedText = "";
let pasteArr = [];

// flavor arrays
const summerWords = [
  "sunshine",
  "beach",
  "icecream",
  "sandals",
  "picnic",
  "swim",
  "campfire",
  "vacation",
  "hammock",
  "lemonade",
];
const natureWords = [
  "forest",
  "river",
  "mountain",
  "meadow",
  "breeze",
  "wildflower",
  "rain",
  "stone",
  "tree",
  "sunrise",
];
const musicWords = [
  "melody",
  "rhythm",
  "chorus",
  "guitar",
  "piano",
  "drums",
  "harmony",
  "lyrics",
  "concert",
  "violin",
];

// event listener to detect button click on one of the
// paste area
//////////////////////// go dev example //////////////
// https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
inputText.addEventListener("paste", (event) => {
  pastedText = (event.clipboardData || window.clipboardData).getData("text");
  pasteArr = pastedText.split(" ").filter(Boolean);
});

// function to take inputText and the flavor array generate new text replace every 3rd word with random flavor word

// function to output the text into the output area
// buttons event listeners
summerButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < pasteArr.length; i++) {
    if ((i + 1) % 3 === 0) {
      const randomFlavor = Math.floor(Math.random() * summerWords.length);
      pasteArr[i] = summerWords[randomFlavor];
    }
  }

  textOut.innerHTML = pasteArr;
});
// nature
natureButton.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < pasteArr.length; i++) {
    if ((i + 1) % 3 === 0) {
      const randomIndex = Math.floor(Math.random() * natureWords.length);
      pasteArr[i] = natureWords[randomIndex];
    }
  }
  textOut.innerHTML = pasteArr;
});
musicButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("music");
});

// example js
// const targetArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceArray = ["A", "B", "C", "D", "E"];
// for (let i = 0; i < targetArray.length; i++) {
//   if ((i + 1) % 3 === 0) {
//     // Get a random index from the sourceArray
//     const randomIndex = Math.floor(Math.random() * sourceArray.length);
//     // Replace the element in targetArray
//     targetArray[i] = sourceArray[randomIndex];
//   }
// }
//  console.log(targetArray);
