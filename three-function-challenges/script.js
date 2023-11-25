/* # Function Challenges

Now that you know the basics of how functions work, let's try a few challenges.

## Challenge 1

**Instructions:**

Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function

**Expected Result:**

```JavaScript
console.log(getCelsius(32)); // 0
```

You can make the output look prettier by putting it into a string. You can even add `\xB0` (degrees) and a `C` in front of the celsius temperature.

```JavaScript
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// The temperature is 0 °C
```

*/
f = 98.6;
const getCelsius = (f) => {
  let c = ((f - 32) * 5) / 9;
  console.log(c);
  return c;
};
// or
getCelsius2 = (f) => ((f - 32) * 5) / 9;

getCelsius(f);
console.log(getCelsius2(102));
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// /////////////////////////////////////////////
/* ## Challenge 2

**Instructions:**

Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

**Expected Result:**

```JavaScript
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 } */
arr = [1, 2, 3, 4, 5];
const minMax = () => {};

console.log(minMax(arr));
