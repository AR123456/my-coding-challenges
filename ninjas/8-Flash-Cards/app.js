const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const card = document.querySelector(".card");

question.addEventListener("click", () => {
  console.log("click");
  card.style.transform = "rotateY(180deg)";
  answer.classList.remove("hidden");
  question.classList.add("hidden");
});
