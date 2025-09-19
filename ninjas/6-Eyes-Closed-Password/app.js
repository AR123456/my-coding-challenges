const eyes = document.querySelector(".eyes");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const hide = document.querySelector(".hide");

const toggleEyes = () => {
  let closed = document.querySelector(".closed");
  if (closed.style.display === "inline") {
    closed.style.display === "hidden";
  } else {
    closed.style.display === "inline";
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
