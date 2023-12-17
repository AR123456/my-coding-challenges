// Challenge add a new list item to the DOM shopping list

lastItem = document.querySelector("#item-list > li:nth-child(4)");
console.log(lastItem);

// insert this template into the DOM
let newItem = `<li>
Street Tacos 
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
</li>`;
document.createElement(newItem);
