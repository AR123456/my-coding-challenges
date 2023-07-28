//  Find the least number of coins required that can make any change from 1 to 99 cents. The coins can only be pennies (1), nickels (5), dimes (10), and quarters (25), and you must be able to make every value from 1 to 99 (in 1-cent increments) using those coins.
// https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/
let coins = [1, 5, 10, 25];
let n = coins.length;
let arrayOfCoins = [];

function minCoins(x) {
  for (let i = n - 1; i >= 0; i--) {
    // this finds the coins
    while (x >= coins[i]) {
      x -= coins[i];
      arrayOfCoins.push(coins[i]);
    }
    console.log("array of coins", arrayOfCoins);
    // https://bobbyhadz.com/blog/javascript-check-how-many-times-element-appears-in-array
    const count = arrayOfCoins.reduce((accumulator, value) => {
      accumulator[value] = ++accumulator[value] || 1;

      return accumulator;
    }, {});
    console.log("count", count);
  }
}
minCoins(73);
