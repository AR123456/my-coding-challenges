/*Closures
An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.  */
/* In this example, createAdder passes the first parameter a and the inner function has access to it. This way, createAdder serves as a factory of new functions, with each returned function having different behavior. */
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
