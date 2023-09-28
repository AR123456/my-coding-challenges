/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    //// return promise- it can resolve or reject
    return new Promise(async (resolve, reject) => {
      // pass in a method that calls reject after time t
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);
      try {
        const res = await fn(...args);
        resolve(res);
      } catch (error) {
        reject(err);
      }
      // fn(...args)
      //   .then((res) => resolve(res))
      //   .catch((err) => reject(err))
      //   // un schedule the time out in the case where it was not rejected
      //   .finally(clearTimeout(id));
    });
  };
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
