//  Find the least number of coins required that can make any change from 1 to 99 cents. The coins can only be pennies (1), nickels (5), dimes (10), and quarters (25), and you must be able to make every value from 1 to 99 (in 1-cent increments) using those coins.
// https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/
// coin denominations
let coins = [1, 5, 10, 25];
// to be used as the size of the denominations array
let n = coins.length;
// this array will store the individual coins use dto make up the passed in value (x)
let arrayOfCoins = [];
// takes in parameter x the target value for which needed coins is to be found
function minCoins(x) {
  // The function starts a loop that iterates through the denominations array (coins) in reverse order (from the largest denomination to the smallest). This is because we want to use the largest coins possible to minimize the number of coins used.

  for (let i = n - 1; i >= 0; i--) {
    // Inside the loop, there is another loop (while loop) that runs as long as the given value x is greater than or equal to the current denomination coins[i]. This loop subtracts the current denomination from x and adds that denomination to the arrayOfCoins array. It continues to do so until the remaining value x is smaller than the current denomination.
    // this finds the coins
    while (x >= coins[i]) {
      x -= coins[i];
      arrayOfCoins.push(coins[i]);
    }
    // array of coins will show the individual coins used to make up the given value x.
    console.log("array of coins", arrayOfCoins);
    // https://bobbyhadz.com/blog/javascript-check-how-many-times-element-appears-in-array
    // Next, a new object count is created using the reduce method on the arrayOfCoins array. The count object will keep track of how many times each coin denomination appears in the arrayOfCoins array.
    const count = arrayOfCoins.reduce((accumulator, value) => {
      // The reduce method takes a function as an argument. This function is used to iterate through each element of the arrayOfCoins and create the count object. For each coin value encountered, the function increments the count for that denomination in the count object
      accumulator[value] = ++accumulator[value] || 1;
      // The result of the reduce method is an object where the keys represent the coin denominations, and the values represent the count of each denomination used.
      return accumulator;
    }, {});
    // the count of each coin denomination used to make up the given value x.
    console.log("count", count);
  }
}
minCoins(73);
