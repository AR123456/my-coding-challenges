/* Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13. */
/**
 * @return {Generator<number>}
 */
function* fibGenerator() {
  let prev = 0;
  let current = 1;

  for (let i = 0; i < callCount; i++) {
    yield prev;
    [prev, current] = [current, prev + current];
  }
}

// Example usage:
const callCount = 5;
const gen = fibGenerator(callCount);

for (let i = 0; i < callCount; i++) {
  console.log(gen.next().value);
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
