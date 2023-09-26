//
// curry acts like a decorator
var curry = function (fn) {
  let nums = [];
  // rest args operator  getting passed in
  return function curried(...args) {
    // create a new copy of nums adding in the args
    nums = [...nums, ...args];
    if (fn.length === nums.length) {
      // here nums is spread operator
      const res = fn(...nums);
      // reset array back to empty
      nums = [];
      return res;
    } else {
      return curried;
    }
  };
};
