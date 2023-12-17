// Challenge add a new list item to the DOM shopping list
// way one - innerHTML
// create a function that will take in an item to be added

const createListItem = (item) => {
  // this will not work because it is not a node, you have to create the element node first
  // const li = `<li>${item}</li>`;
  // Create the li element node
  const li = document.createElement("li");
  // set the nodes inner element to be the string
  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  document.querySelector(".items").appendChild(li);
};

// call function
createListItem("Eggs");
