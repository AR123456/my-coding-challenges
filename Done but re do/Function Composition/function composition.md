JavaScript function composition is a powerful functional programming concept that involves combining two or more functions to create a new function. The output of one function becomes the input of another function, allowing for a concise and reusable way of building complex operations from simpler ones.

In functional programming, functions are treated as first-class citizens, meaning they can be passed as arguments to other functions and returned as values from functions. This characteristic makes function composition possible in JavaScript.

Test cases
Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 _ (4) = 8
(8) _ (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 _ (1) = 10
10 _ (10) = 100
10 \* (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
