const list = document.querySelector(".word-list");
const items = list.querySelectorAll("span");
let index = 0;

setInterval(() => {
  index = (index + 1) % items.length;
  list.style.transform = `translateY(=${index * 30}px)`;
}, 2000);
