/* 
@param{function} fn
@param{number} t
@param{Function}

*/
// the passed in function will throttle for t amount  of time
var throttle = function (fn, t) {
  return function (...args) {
    // the second time it will run at a scheduled amount of time - only one can be logged at a time
  };
};

/* 
const throttled = throttle(console.log,100);
throttled("log")// log immediately
throttled("log")//  
throttled("log2")// logged at t=100ms
FIFO , Promises 
*/
