/* Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
Constraints:

1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
/* use the once function to create a new function fetchOnce, which ensures that the API call (fetchDataFromAPI) is executed only once. Subsequent calls to fetchOnce will not trigger additional API calls, and the result from the first call will be returned immediately */
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

// Simulate an API call function that fetches data (using setTimeout)
/* function fetchDataFromAPI, which returns a Promise to simulate an API call that fetches data. The API call is wrapped in a setTimeout function to introduce a 2-second delay. */
function fetchDataFromAPI() {
  return new Promise((resolve) => {
    // Simulate a delay of 2 seconds to represent the API call
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      resolve(data);
    }, 2000);
  });
}

// Create an API call function that ensures fetchDataFromAPI is called only once
const fetchOnce = once(fetchDataFromAPI);

// Call the fetchOnce function multiple times
/* In the makeMultipleAPICalls function, we demonstrate calling fetchOnce multiple times. You'll notice that even though we call fetchOnce three times, the API call is only made once (due to the once behavior), and subsequent calls return the same data without making additional API requests.

This behavior is helpful to avoid redundant API calls when you want to ensure that the same data is fetched and processed consistently throughout your application without invoking the API multiple times for the same data. */
async function makeMultipleAPICalls() {
  console.log("Calling API...");
  const data1 = await fetchOnce();
  console.log("Data 1:", data1);

  // Calling fetchOnce again, but the API call should not be made again
  console.log("Calling API again...");
  const data2 = await fetchOnce();
  console.log("Data 2:", data2);

  // Calling fetchOnce one more time, again no API call
  console.log("Calling API once more...");
  const data3 = await fetchOnce();
  console.log("Data 3:", data3);
}

// Call the function that makes multiple API calls
makeMultipleAPICalls();
