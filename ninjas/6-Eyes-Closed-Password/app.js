const eyes = document.querySelector(".eyes");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");

password.detectInput = addEventListener("input", (event) => {
  console.log(password.value);
});

password.addEventListener("focus", () => {});
password.addEventListener("blur", () => {
  console.log("out");
});
