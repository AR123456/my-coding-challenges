// buttons, textarea and output
const inputText = document.querySelector("textarea");
const textOut = document.querySelector(".text-output");
// using query selector all for buttons
const buttons = document.querySelectorAll("button");

const flavors = {
  summerWords: [
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
  ],
  natureWords: [
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
  ],
  musicWords: [
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
  ],
};
// paste event
inputText.addEventListener("paste", (event) => {
  pastedText = (event.clipboardData || window.clipboardData).getData("text");
  pasteArr = pastedText.split(" ").filter(Boolean);
  console.log(pasteArr);
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

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target.dataset.flavor);
    let target = e.target.dataset.flavor;
    console.log(pasteArr, target);
    addFlavor(pasteArr, target);
  });
});
