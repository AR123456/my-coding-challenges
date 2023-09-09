/**\You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
//The function climbStairs takes an integer n representing the number of steps.

var climbStairs = function (n) {
  // If n is less than or equal to 2, there are n distinct ways to climb to the top.
  if (n <= 2) {
    return n;
  }
  // Otherwise, we use dynamic programming to calculate the number of ways. We create an array dp where dp[i] represents the number of ways to reach step i.
  var dp = new Array(n + 1).fill(0);
  /* We initialize dp[1] and dp[2] as base cases (1 way to reach the first step, and 2 ways to reach the second step). */
  dp[1] = 1;
  dp[2] = 2;
  /* We then use a loop to fill in the rest of the array dp using the formula dp[i] = dp[i - 1] + dp[i - 2]. */
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  /* Finally, we return dp[n] which represents the number of ways to reach the top. */
  return dp[n];
};

// Example usage:
var result1 = climbStairs(2); // Output: 2
var result2 = climbStairs(3); // Output: 3
var result3 = climbStairs(8); // Output:

console.log(result1);
console.log(result2);
console.log(result3);
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
