/**
 * @param {Function[]} functions
 * @return {Function}
 */
const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let x = 4;
var compose = function (functions) {
  fn = (acc, f) => f(acc);
  return function (x) {
    //take list of functions and apply consecutively - in revers order ob x
    // function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))
    /////////// declarative way
    // aggregate a list of values - we say how to aggregate
    // takes 2 values a function and starting value
    return functions.reduceRight(fn, x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
