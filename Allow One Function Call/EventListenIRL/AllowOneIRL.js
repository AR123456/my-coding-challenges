/**
 * @param {Function} fn
 * @return {Function}
 */
/* Event listeners: In event-driven programming, you might have scenarios where you want to add an event listener to a specific event, but you want to ensure that the listener is attached only once, even if the function is called multiple times. */
// use the once function to create a new function onClickOnce, which will ensure that showAlert is executed only once.
var once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }

    return undefined;
  };
};

// The event listener function that we want to execute only once displays an alert message when called.
function showAlert() {
  alert("Button clicked! This alert will be shown only once.");
}

// Get the button element from the DOM
const myButton = document.getElementById("myButton");

// Create an event listener using the once function
const onClickOnce = once(showAlert);

// Attach the event listener to the button attach the onClickOnce event listener to the button using the addEventListener method
myButton.addEventListener("click", onClickOnce);
