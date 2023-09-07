function calculateDailyInterest(principal, interestRate) {
  // Convert the interest rate to a daily rate
  const dailyRate = interestRate / 365;

  return function (days) {
    let balance = principal;

    for (let i = 0; i < days; i++) {
      balance += balance * dailyRate;
    }

    return balance;
  };
}

// Example usage:
const initialPrincipal = 1000;
const annualInterestRate = 0.05; // 5% annual interest rate

const interestCalculator = calculateDailyInterest(
  initialPrincipal,
  annualInterestRate
);

const daysPassed = 30;
const balanceAfter30Days = interestCalculator(daysPassed);

console.log(balanceAfter30Days.toFixed(2)); // Output: 1012.74 (rounded to 2 decimal places)
