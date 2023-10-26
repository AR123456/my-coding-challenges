/**
 * @param {Array} arr
 * @return {Generator}
 */
/* Here's what's happening:

const arr1 = [[[6]],[1,3],[]]; initializes a multi-dimensional array.

const generator1 = inorderTraversal(arr1); creates a generator object by calling inorderTraversal with arr1.

generator1.next() is called multiple times. Each call advances the generator to the next yield statement and returns an object with value (the yielded value) and done (whether the generator has completed).

The values are logged to the console. In the first example, it yields the values 6, 1, and 3 in that order. In the second example, since the input array is empty, the generator immediately completes (done is true). */

var inorderTraversal = function* (arr) {
  for (const el of arr) {
    // This checks whether the current element el is an array using the Array.isArray function. If el is an array, it means we've encountered a nested multi-dimensional array
    if (Array.isArray(el)) {
      // If el is an array, this line recursively calls the inorderTraversal function on the nested array. The yield* statement is used to delegate the execution of the generator function to the one called.
      yield* inorderTraversal(el);
    } else {
      // In this case, the generator yields the value of el. This means that the value will be returned by the generator when it's consumed.
      yield el;
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
// Example usage:
const arr1 = [[[6]], [1, 3], []];
const generator1 = inorderTraversal(arr1);

console.log(generator1.next().value); // 6
console.log(generator1.next().value); // 1
console.log(generator1.next().value); // 3
console.log(generator1.next().done); // true

const arr2 = [];
const generator2 = inorderTraversal(arr2);

console.log(generator2.next().done); // true
