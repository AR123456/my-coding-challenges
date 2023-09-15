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
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
let t = Date.now();
sleep(200).then(() => console.log(Date.now() - t));
