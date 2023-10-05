/* 
@param{function} fn
@param{number} t
@param{Function}

*/
var throttle = function (fn, t) {
  let isThrottled = false;
  let nextArgs = undefined;
  return function (...args) {
    if (isThrottled) {
      //wait- schedule the next execution
      nextArgs = args;
    } else {
      fn(...args);
      isThrottled = true;
      setTimeout(helper, t);
    }
    function helper() {
      // is there something scheduled ?
      if (nextArgs) {
        fn(...nextArgs);
        isThrottled = true;
        nextArgs = null;
        setTimeout(helper, t);
      } else {
        // timeout expires
        isThrottled = false;
      }
    }
  };
};

/* 
const throttled = throttle(console.log,100);
throttled("log")// log immediately
throttled("log")// logged at t=100ms
*/
