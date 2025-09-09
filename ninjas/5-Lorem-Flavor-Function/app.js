// buttons, textarea and output
const inputText = document.querySelector("textarea");
const textOut = document.querySelector(".text-output");
const summerButton = document.querySelector("#summer");
const natureButton = document.querySelector("#nature");
const musicButton = document.querySelector("#music");
let pastedText = "";
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
  let pastedText = (event.clipboardData || window.clipboardData).getData(
    "text"
  );
  handlePaste(pastedText);
});

// function to take inputText and the flavor array generate new text replace every 3rd word with random flavor word
function handlePaste(text) {
  console.log("in the handle paste function", text);
}
// function to output the text into the output area
// buttons event listeners
summerButton.addEventListener("click", (event, text) => {
  event.preventDefault();
  console.log("nature");
  handlePaste();
});
natureButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("nature");
});
musicButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("music");
});
