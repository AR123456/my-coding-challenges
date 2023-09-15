/*Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array. 
Constraints:

arr is a valid JSON array
fn is a function that returns a number
1 <= arr.length <= 5 * 105
*/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  console.log(arr);
};

/* ************************* Identity function 
fn that takes a single parameter x and returns the value of x without any modifications -identity function, where the output is the same as the input.
The function essentially acts as a pass-through, returning whatever value is passed to it as an argument.

fn = (x) => x 

The provided arrow function fn = (x) => x; might not seem immediately useful on its own, but it is a simple example that demonstrates a concept: the identity function. While this specific function may not have direct practical applications in most scenarios, understanding the concept of an identity function can help when dealing with more complex programming tasks and functional programming concepts.

Here are a few reasons why the concept of an identity function, represented by fn = (x) => x;, can be useful in certain contexts:

Functional Programming Paradigm: In functional programming, functions are treated as first-class citizens. The identity function is a fundamental concept within functional programming and can be used as a building block for more complex functions and operations.

Higher-Order Functions: Higher-order functions are functions that take other functions as parameters or return functions as results. The identity function can be used as an argument to higher-order functions that require a function argument, even though it might not modify the data. This is particularly relevant when working with functions like map, filter, or reduce.

Default Behavior: In some cases, you might need to provide a default behavior that does not modify the input. The identity function can serve as a default implementation for such cases.

Debugging and Testing: The identity function can be useful for debugging and testing purposes. It can be used to isolate and test specific parts of code without introducing additional complexity.

Code Demonstrations: As seen in this example, the identity function can be used to explain and demonstrate programming concepts in a simple manner. It helps newcomers understand the basic structure of functions and function definitions.

While the direct application of the identity function fn = (x) => x; might be limited, the underlying idea has broader implications in programming paradigms, software design, and understanding how functions work in various contexts.




*/

/*  

Example 1:

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
Example 2:

Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
Example 3:

Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1. 
  */
