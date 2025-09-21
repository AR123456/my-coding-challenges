const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const openImg = document.querySelector(".eyes.open img");
const closedImg = document.querySelector(".eyes.closed img");

const setEyesClosed = (closed) => {
  if (closed) {
    openImg.style.display = "none";
    closedImg.style.display = "inline";
  } else {
    openImg.style.display = "inline";
    closedImg.style.display = "none";
  }
};

password.addEventListener("input", (event) => {
  console.log("input -> keep them closed");
  setEyesClosed(true);
});

password.addEventListener("blur", () => {
  console.log("blur -> open your eyes");
  setEyesClosed(false);
});
