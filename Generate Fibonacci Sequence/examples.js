const gen = [1, 2, 3][Symbol.iterator]();
console.log(gen.next()); // { value: 1, done: false }

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen2 = simpleGenerator();

console.log(gen2.next().value); // 1
console.log(gen2.next().value); // 2
console.log(gen2.next().value); // 3
