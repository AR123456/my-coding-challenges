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
// paste event
inputText.addEventListener("paste", (event) => {
  pastedText = (event.clipboardData || window.clipboardData).getData("text");
  pasteArr = pastedText.split(" ").filter(Boolean);
});

const addFlavor = (pasteArr, targetArray) => {
  for (let i = 0; i < pasteArr.length; i++) {
    if ((i + 1) % 3 === 0) {
      const randomFlavor = Math.floor(Math.random() * targetArray.length);
      pasteArr[i] = targetArray[randomFlavor];
    }
  }
  textOut.textContent = pasteArr.join(" ");
};

summerButton.addEventListener("click", (event) => {
  event.preventDefault();
  addFlavor(pasteArr, summerWords);
});

natureButton.addEventListener("click", (event) => {
  event.preventDefault();
  addFlavor(pasteArr, natureWords);
});
musicButton.addEventListener("click", (event) => {
  event.preventDefault();
  addFlavor(pasteArr, musicWords);
});
