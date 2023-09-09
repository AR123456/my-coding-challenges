/**\You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
1 <= n <= 45
 * @param {number} n
 * @return {number}
 */
let n = 3;
var climbStairs = function (n) {
  // how many diffrent ways can you make 3
  let steps = 0;
  if (n % 1 === 0) {
    steps + 1;
  }
  if (n % 2 === 0) {
    steps + 2;
  }

  console.log(steps);
};

climbStairs(n);
/* Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
  */
