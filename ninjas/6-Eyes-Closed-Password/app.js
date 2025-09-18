const eyes = document.querySelector(".eyes");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
console.log(password);
password.addEventListener("focus", () => {
  console.log(password);
});
password.addEventListener("blur", () => {
  console.log("out");
});
