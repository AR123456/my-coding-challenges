// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.

const { clearScreenDown } = require("readline");

// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
const arr = [50, 60, 60, 45, 71];
function evenOddSums(arr) {
  let odds = 0;
  let evens = 0;
  sum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens += arr[i];
    } else {
      odds += arr[i];
    }
  }
  sum.push(odds, evens);
  console.log(sum);
}
evenOddSums(arr);
