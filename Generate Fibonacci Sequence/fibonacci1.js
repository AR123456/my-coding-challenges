/* Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13. */
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;
  let count = 0;
  //  limit the sequence to 1000
  for (let i = 0; i < 1000; i++) {
    while (true) {
      if (count === 0) {
        yield 0;
      } else if (count === 1) {
        yield 1;
      } else {
        const nextNum = a + b;
        yield nextNum;
        a = b;
        b = nextNum;
      }
      count++;
    }
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
console.log(output);
