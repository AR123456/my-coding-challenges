/* Function Hoisting
JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax. */
/* In this example, the function is returned before it is initialized. Although it is valid syntax, it is sometimes considered bad practice as it can reduce readability */
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}
const f = createFunction();
console.log(f(3, 4)); // 7
