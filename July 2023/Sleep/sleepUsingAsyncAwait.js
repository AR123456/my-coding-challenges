// Readability and Synchronous-Like Code: The async/await syntax provides a more natural and synchronous-like way of writing asynchronous code. This can make the code easier to read and understand, especially for developers who are more accustomed to synchronous programming paradigms.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Reduced Nesting and Flatter Code: With async/await, you can avoid excessive nesting of .then() callbacks, which can lead to the "callback hell" problem. Instead, you write your asynchronous operations sequentially, one after the other, in a more linear fashion.
//Error Handling: async/await allows you to handle errors using traditional try/catch blocks, which can lead to cleaner and more centralized error handling.
async function sleep(millis) {
  await delay(millis);
}

let t = Date.now();
sleep(200).then(() => console.log(Date.now() - t)); // Output: 200
