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
    /* This is a base case check. If n is less than or equal to 2, there are n distinct ways to climb to the top. This is because if n is 1, you can only take one step. If n is 2, you can either take two steps at once or take one step twice */
    return n;
  }
  // Otherwise, we use dynamic programming to calculate the number of ways. We create an array dp where dp[i] represents the number of ways to reach step i.
  //  dp stands for "dynamic programming." It's a common convention to use the variable name dp when working with dynamic programming solutions i
  /* This is where the dynamic programming approach starts. We create an array dp of length n + 1 and initialize all its elements to 0. This array will be used to store the number of ways to reach each step. */
  var dp = new Array(n + 1).fill(0);
  /* We initialize dp[1] and dp[2] as base cases (1 way to reach the first step, and 2 ways to reach the second step). */
  /* dp[1] is set to 1 because there's only one way to reach the first step (by taking one step). */
  dp[1] = 1;
  /* dp[2] is set to 2 because there are two ways to reach the second step (by taking two steps at once or by taking one step twice). */
  dp[2] = 2;
  /* This is the heart of the dynamic programming solution We use a loop to calculate the number of ways to reach each step from the third step (i = 3) up to the n-th step.  
  dp[i] = dp[i - 1] + dp[i - 2] means that the number of ways to reach step i is equal to the sum of the number of ways to reach the previous step (i - 1) and the step before that (i - 2). This is because you can either take one step from the previous step or two steps from the step before that.  
  */
  for (var i = 3; i <= n; i++) {
    /* By iteratively applying this formula, we build up the solutions for all steps up to n. */
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
