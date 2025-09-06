// buttons, textarea and output
const inputText = document.querySelector("textarea");
const textOut = document.querySelector(".text-output");
const summerButton = document.querySelector("#summer");
const natureButton = document.querySelector("#nature");
const musicButton = document.querySelector("#music");

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
// function to take inputText and the flavor array generate new text replace every 3rd word with random flavor word

// function to output the text into the output area

// event listener to detect button click on one of the
// paste area
// inputText.addEventListener("paste", (event) => {
//   const pastedText = (event.clipboardData || window.clipboardData).getData(
//     "text"
//   );
// https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
inputText.addEventListener("paste", (event) => {
  const pastedText = event.clipboardData.getData("text");
  console.log(pastedText);
});

// buttons
summerButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
});
natureButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
});
musicButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
});
