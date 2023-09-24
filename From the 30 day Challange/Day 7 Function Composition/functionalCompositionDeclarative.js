/**
 * @param {Function[]} functions
 * @return {Function}
 */
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let x = 4;
var compose = function (functions) {
  return function (x) {
    //take list of functions and apply consecutively - in revers order ob x
    // function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))
    // declarative way
    for (const fn of functions.reverse()) {
      x = fn(x);
    }
    console.log(x);
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
