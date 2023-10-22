/**
 * @param {number[]} cost
 * @return {number}
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);

  dp[0] = dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
};
const cost1 = [10, 15, 20];
const result1 = minCostClimbingStairs(cost1);
console.log(result1); // Output: 15

const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
const result2 = minCostClimbingStairs(cost2);
console.log(result2); // Output: 6
