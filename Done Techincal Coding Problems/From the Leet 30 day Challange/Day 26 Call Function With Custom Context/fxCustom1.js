/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueKey = Symbol(); // Create a unique key to avoid property name conflicts
  context[uniqueKey] = this; // Set the function as a property on the context object
  const result = context[uniqueKey](...args); // Call the function with the provided arguments
  delete context[uniqueKey]; // Clean up by deleting the property
  return result; // Return the result of the function call
};

// Example usage:

function add(b) {
  return this.a + b;
}

const result = add.callPolyfill({ a: 5 }, 7); // Output: 12
console.log(result);

function tax(price, taxRate) {
  return `The cost of the ${this.item} is ${price * taxRate}`;
}

const result2 = tax.callPolyfill({ item: "burger" }, 10, 1.1); // Output: "The cost of the burger is 11"
console.log(result2);

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
