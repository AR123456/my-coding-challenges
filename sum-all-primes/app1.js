// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;
  // start with 2 (the first prime number )
  for (let i = 2; i <= num; i++) {
    // check if i is prime and if it is add it to total
    for (let j = 2; j < i; i++) {
      if (i % j === 0) {
        return false;
      }
    }
    total += 1;
  }
  console.log(total);
}
sumAllPrimes(10);
