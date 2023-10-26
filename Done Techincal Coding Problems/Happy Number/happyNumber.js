/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seenNumbers = new Set();

  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = getSumOfSquaredDigits(n);
  }

  return n === 1;
};

function getSumOfSquaredDigits(num) {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(isHappy(19)); // Output: true
console.log(isHappy(2)); // Output: false
