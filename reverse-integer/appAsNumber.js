// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
// https://stackoverflow.com/questions/51146294/reverse-a-number-without-making-it-a-string-in-javascript
function reverseInt(int) {
  //
  let numRev = 0;
  while (int > 0) {
    numRev = numRev * 10 + (int % 10);
    int = Math.floor(int / 10);
  }
  console.log(numRev);
  return numRev;
}

reverseInt(123);

/* 
This stack code explained by chat GPT 
This JavaScript function `reverseInt` takes an integer (`int`) as input and returns its reverse.

Here's how the function works:

1. `let numRev = 0;`: This initializes a variable `numRev` to store the reversed integer. It starts at 0.

2. `while (int > 0) { ... }`: This initiates a loop that continues as long as `int` is greater than 0.

3. `numRev = numRev * 10 + (int % 10);`: In each iteration of the loop, this line is executed.

   - `int % 10` gives the last digit of the current `int`. For example, if `int` is 123, then `int % 10` would be 3.
   
   - `numRev * 10` shifts the existing reversed digits one place to the left (effectively multiplying them by 10).
   
   - Adding `(int % 10)` appends the last digit to the right of `numRev`.

   For example, if `int` is 123, and `numRev` is initially 0, after the first iteration, `numRev` becomes 3. After the second iteration, it becomes 32, and after the third iteration, it becomes 321. This effectively reverses the digits.

4. `int = Math.floor(int / 10);`: This updates `int` to be the result of integer division by 10. This effectively removes the last digit from `int`.

   For example, if `int` is 123, this operation would result in `int` becoming 12.

5. The loop continues until `int` becomes 0, at which point all the digits have been processed.

6. `console.log(numRev);`: This line prints the reversed integer to the console. In the example provided, it will print `321`.

7. `return numRev;`: Finally, the function returns the reversed integer.

In your example, `reverseInt(123)` is called, which means it will reverse the digits of `123`. The reversed integer, `321`, is printed to the console, and the function also returns `321`.

*/
