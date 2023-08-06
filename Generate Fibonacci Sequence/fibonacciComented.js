/* Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13. */
/**
 * @return {Generator<number>}
 */

var fibGenerator = function* () {
  let prev1 = 0;
  let prev2 = 1;

  while (true) {
    yield prev1;
    const temp = prev1;
    prev1 = prev2;
    prev2 += temp;
  }
};
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
// Create a generator instance using the fibGenerator function
const gen = fibGenerator();

// Get the first value of the Fibonacci sequence
console.log(gen.next().value); // Output: 0

// Get the second value of the Fibonacci sequence
console.log(gen.next().value); // Output: 1

// Continue getting the subsequent values of the Fibonacci sequence
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().value); // Output: 5
// ... and so on
