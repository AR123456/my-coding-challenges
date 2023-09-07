/**
 * @param {Function} fn
 * @return {Function}
 */
/* This JavaScript code defines a function called once that takes another function fn as an argument and returns a new function. The returned function can only be called once, and subsequent calls will not execute the original function fn again. The code demonstrates this by using the once function to wrap an asynchronous API call, ensuring that the API is called only once, and the result is cached for subsequent calls.
The once function:

Parameters: It takes a single parameter fn, which is expected to be a function.
Return value: The once function returns another function that will execute the original function fn only once.



*/
var once = function (fn) {
  /* Implementation: Inside the once function, two variables are declared: called (a boolean) and result (used to store the result of the original function call) */
  let called = false;
  let result;
  /* The returned function:
Parameters: The returned function uses the rest parameter syntax (...args) to accept any number of arguments. */
  return function (...args) {
    /* Functionality: It first checks if the called variable is false. If it is, it means the original function hasn't been called yet. In that case, it sets called to true, calls the original function fn with the provided arguments using the spread operator ...args, stores the result in the result variable, and returns the result. */
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    /* If called is already true, it means the function has been called before, so the returned function doesn't execute the original function fn again and simply returns undefined. */
    return undefined;
  };
};

/* fetchDataFromAPI function:

This is a mock asynchronous function that returns a Promise that resolves after a 2-second delay with some dummy data (an object with the properties name and age).*/
function fetchDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "John Doe", age: 30 };
      resolve(data);
    }, 2000);
  });
}
/* const fetchOnce = once(fetchDataFromAPI);:

This line creates a new function called fetchOnce by invoking the once function with fetchDataFromAPI as its argument. This means that fetchOnce is now a function that will call fetchDataFromAPI only once and cache the result for subsequent calls. */
const fetchOnce = once(fetchDataFromAPI);

//*******************demo  */
/*vasync function makeMultipleAPICalls() { ... }:

This function is defined to demonstrate the behavior of the fetchOnce function.
It is an asynchronous function, which means it can use the await keyword inside it. */
async function makeMultipleAPICalls() {
  /* Inside makeMultipleAPICalls():

The function logs some messages to the console to indicate the steps it's going through.
It first calls fetchOnce() and stores the result in data1.
Then, it calls fetchOnce() again, but since fetchOnce can only call the API once, the second call doesn't make the actual API request. Instead, it directly returns the cached result from the first call.
The same happens with the third call to fetchOnce. */
  console.log("Calling API...");
  const data1 = await fetchOnce();
  console.log("Data 1:", data1);

  console.log("Calling API again...");
  const data2 = await fetchOnce();
  console.log("Data 2:", data2);

  console.log("Calling API once more...");
  const data3 = await fetchOnce();
  console.log("Data 3:", data3);
}

//starts the execution of the makeMultipleAPICalls() function, which, in turn, calls fetchOnce() multiple times but fetches the actual data only once.
makeMultipleAPICalls();
/* The purpose of this code is to ensure that an expensive operation, like an API call, is executed only once, and the result is reused for subsequent calls. This can be useful in scenarios where you want to avoid redundant API calls when the same data is requested multiple times. */
