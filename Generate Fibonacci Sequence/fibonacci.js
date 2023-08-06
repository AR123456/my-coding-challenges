/* Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13. */
/**
 * @return {Generator<number>}
 */
/* 1 The fibGenerator generator function is defined using the function* syntax, indicating that it's a generator function. */
var fibGenerator = function* () {
  /* 2 Inside the function, two variables prev1 and prev2 are declared and initialized to 0 and 1, respectively. These variables will be used to keep track of the last two numbers in the Fibonacci sequence. */
  let prev1 = 0;
  let prev2 = 1;
  /* 3 The generator function is implemented using an infinite loop with while (true). This ensures that the generator can continue yielding values indefinitely. */
  while (true) {
    /*  4.The yield keyword is used to produce the next value of the Fibonacci sequence, which is the value of prev1 at the beginning of each iteration. */
    yield prev1;
    /* 5. After yielding the current prev1 value, a temporary variable temp is used to store the value of prev1. Then, prev1 is updated to prev2, and prev2 is updated by adding the temporary variable temp. This updates prev1 and prev2 to be the next two numbers in the Fibonacci sequence, which will be used in the next iteration of the loop. */
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
