const eyes = document.querySelector(".eyes");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const openImg = document.querySelector(".eyes.open img");
const closedImg = document.querySelector(".eyes.closed img");

const toggleEyes = () => {
  let closed = document.querySelector(".closed");
  if (closed.style.display === "inline") {
    closed.style.display = "none";
  } else {
    closed.style.display = "inline";
  }
};
password.addEventListener("focus", () => {
  password.detectInput = addEventListener("input", (event) => {
    console.log("close your eyes");
    toggleEyes();
  });
});
password.addEventListener("blur", () => {
  console.log("open you eyes");
});
