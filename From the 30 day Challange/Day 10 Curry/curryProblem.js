//
var curry = function (fn) {
  return function curried() {};
};

// a seprate function call for every param
function sum(a, b) {
  return a + b;
}
const csum = curry(sum);
// first function returns another function function(b){return b + a}
csum(1)(2); //3
// a curried function is similar to a higher order function
