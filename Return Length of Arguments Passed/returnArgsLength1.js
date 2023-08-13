/* Write a function argumentsLength that returns the count of arguments passed to it. 
Constraints:

argsArr is a valid JSON array
0 <= argsArr.length <= 100
*/

/**
 * @return {number}
 */
argsArr = [{}, null, "3"];
var argumentsLength = function (...args) {
  console.log(argsArr.length);
  return argsArr.length;
};
argumentsLength();
/**
 * argumentsLength(1, 2, 3); // 3
 */
/* Example 1:

Input: argsArr = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
Example 2:

Input: argsArr = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3. */
