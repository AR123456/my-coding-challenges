const eyes = document.querySelector(".eyes");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const hide = document.querySelector(".hide");

const toggleEyes = () => {
  eyes.style.display === "none";
};
password.addEventListener("focus", () => {
  password.detectInput = addEventListener("input", (event) => {
    console.log("close your eyes");
  });
});
password.addEventListener("blur", () => {
  console.log("open you eyes");
  toggleEyes();
});
