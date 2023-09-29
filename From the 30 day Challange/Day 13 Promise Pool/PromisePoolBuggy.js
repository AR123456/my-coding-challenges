// @param {Function []}functions
// @param {number}n
// @param {Function }

var promisePool = async function (functions, n) {
  // async so we need to return a promise
  return newPromise((resolve, reject) => {
    // go through the array of functions
    let i = 0;
    // track completion of promises
    let inProgress = 0;
    // base case
    if (i < functions.length) {
      resolve();
    }
    while (i < functions.length && i < n) {
      // call the functions at i index, then increment it
      functions[i++]()
        // next function
        .then(() => {
          // when a function completes decrement in progress
          inProgress--;
          if (i < functions.length && inProgress === 0) {
            // call resolve after all the promises have been resolved - but have they?
            resolve();
          }
          // use i pointer to call another function
          functions[i++]()
            // next function
            .then(callback);
          // increment functions in progress each time we start one
          inProgress++;
        });
      // increment functions in progress each time we start one
      inProgress++;
    }
  });
};

const sleep = (t) => NewPromise((res) => setTimeout(res, t));
// passing in an array of 2 methods but only one can be active at a time
// promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // after 900ms

//thread pool wikipedia https://en.wikipedia.org/wiki/Thread_pool#:~:text=Often%20also%20called%20a%20replicated,execution%20by%20the%20supervising%20program.
