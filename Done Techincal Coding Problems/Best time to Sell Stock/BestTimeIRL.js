/*  Imagine you're a stock trader, and you want to make the most profit possible by buying and selling a stock at the right times. The maxProfit function represents a strategy you could use to determine when to buy and sell.

Example Scenario:
Suppose you're tracking the prices of a certain stock over a period of time. The prices array contains the daily prices of the stock.

*/
/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [50, 60, 45, 70, 55, 75, 80];
/* In this scenario:

The stock's price starts at $50 on day 1, increases to $60 on day 2, drops to $45 on day 3, and so on.
Applying the maxProfit function to this example */

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};
/* Explanation:

The function calculates the maximum profit you could make by buying the stock at the lowest price (day 3, $45) and selling it at the highest price (day 7, $80).
Profit = $80 - $45 = $35.
So, in this example, by following the strategy provided by the maxProfit function, you could potentially make a maximum profit of $35 by buying and selling the stock at the right times. */
const profit = maxProfit(prices);
console.log(`The maximum profit is $${profit}`);
