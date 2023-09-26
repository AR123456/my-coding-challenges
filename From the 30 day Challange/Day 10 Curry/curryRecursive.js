//
// curry acts like a decorator
var curry = function (fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      // this needs to be a function
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
};
