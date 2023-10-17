class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}

// Test cases
const calculator1 = new Calculator(10).add(5).subtract(7);
console.log(calculator1.getResult()); // Output: 8

const calculator2 = new Calculator(2).multiply(5).power(2);
console.log(calculator2.getResult()); // Output: 100

try {
  const calculator3 = new Calculator(20).divide(0);
  console.log(calculator3.getResult());
} catch (error) {
  console.error(error.message); // Output: Division by zero is not allowed
}
