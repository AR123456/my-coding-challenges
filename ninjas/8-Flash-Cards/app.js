const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", () => {
  console.log("click");
  answer.classList.remove("hidden");
  question.classList.add("hidden");
});
