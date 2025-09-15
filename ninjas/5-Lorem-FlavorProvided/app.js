// buttons, textarea and output
const inputText = document.querySelector("textarea");
const textOut = document.querySelector(".text-output");
// using query selector all for buttons
const buttons = document.querySelectorAll("button");
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

// summerButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   addFlavor(pasteArr, summerWords);
// });

// natureButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   addFlavor(pasteArr, natureWords);
// });
// musicButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   addFlavor(pasteArr, musicWords);
// });
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target.dataset.flavor);
    let target = e.target.dataset.flavor;
    console.log(typeof target);
    addFlavor(pasteArr, target);
  });
});
