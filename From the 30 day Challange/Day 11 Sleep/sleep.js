/**
 * @param {number} millis
 */
// aysnc is an advantage of JS
async function sleep(millis) {
  // sleep for millis then do something
  function callback(resolve, reject) {
    setTimeout(resolve, millis);
  }
  return new Promise(callback);
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
