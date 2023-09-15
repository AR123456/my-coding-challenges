function minCoins(x) {
  const coins = [1, 5, 10, 25];
  coins.sort((a, b) => b - a); // Sort coins array in descending order
  const count = {};

  for (const coin of coins) {
    while (x >= coin) {
      count[coin] = (count[coin] || 0) + 1;
      x -= coin;
    }
  }

  return count;
}

const value = 73;
const result = minCoins(value);

console.log("Result:", result);
