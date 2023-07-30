/**
 *Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 *
 *Constraints:

1 <= millis <= 1000
 *
 *Explanation: It should return a promise that resolves after 100ms.
let t = Date.now()
 * @param {number} millis
 */
// defines an asynchronous function named sleep that takes a single argument millis, which represents the number of milliseconds to sleep.
async function sleep(millis) {
  // inside the sleep function, we create a new Promise. The Promise constructor takes a function (often referred to as the "executor") that will be called immediately with two arguments: resolve and reject
  // setTimeout(resolve, millis): Within the Promise executor, we use the setTimeout function. setTimeout is a built-in JavaScript function that schedules a function (in this case, resolve) to be called after a specified delay (millis milliseconds).
  return new Promise((resolve) => setTimeout(resolve, millis));
}
// variable t and assigns it the current timestamp using the Date.now() method. The Date.now() method returns the current timestamp in milliseconds since the Unix epoch (January 1, 1970)
let t = Date.now();
// This line calls the sleep function with an argument of 200. The sleep function returns a Promise that will be resolved after 200 milliseconds due to the setTimeout call inside it.
sleep(200)
  //After the sleep Promise is resolved (after 200 milliseconds), the then method is called on the Promise. The then method allows us to attach a callback function that will be executed when the Promise is resolved successfully.
  // log the time difference between the current timestamp (Date.now()) and the timestamp stored in the variable t. This difference represents the number of milliseconds that have elapsed since the sleep function was initially called.
  .then(() => console.log(Date.now() - t));
