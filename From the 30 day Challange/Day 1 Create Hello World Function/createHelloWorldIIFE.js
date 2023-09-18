/* Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body. */

const result = (function (a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result);

// const createHelloWorld = (function () {
//   return "Hello World";
// })();
// console.log(createHelloWorld);
const createHelloWorld = function () {
  return (function (...args) {
    return "hello world";
  })();
};
const a = createHelloWorld();
console.log(a);
