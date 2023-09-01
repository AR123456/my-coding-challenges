/**
 * Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

Debounce Schematic

The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's _.debounce() function.
Constraints:

0 <= t <= 1000
1 <= calls.length <= 10
0 <= calls[i].t <= 1000
0 <= calls[i].inputs.length <= 10
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
/* The debounce function takes two parameters: fn (the function to debounce) and t (the time in milliseconds to wait before executing the debounced function). */
var debounce = function (fn, t) {
  /* Inside the debounce function, we declare a timeout variable to keep track of the timeout set for the debounced function. */
  let timeout;
  /* The returned function is a closure that takes any number of arguments using the ...args syntax. */
  return function (...args) {
    /* Within the returned function, we clear the previous timeout (if it exists) using clearTimeout(timeout) to ensure that the debounced function is not executed prematurely. */
    clearTimeout(timeout);
    /* We then set a new timeout using setTimeout, which will execute the fn function with the provided arguments after the specified t milliseconds. */
    timeout = setTimeout(() => {
      /* We then set a new timeout using setTimeout, which will execute the fn function with the provided arguments after the specified t milliseconds. */
      fn.apply(this, args);
      /* When you call the debounced function (log in this case), it will delay the execution of the original function (console.log) by t milliseconds. If the debounced function is called again within that time window, the previous timeout is cleared, and a new one is set. */
    }, t);
  };
};

// Test case 1
const calls1 = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] },
];

let start1 = Date.now();
function log1(...inputs) {
  console.log([Date.now() - start1, inputs]);
}
const dlog1 = debounce(log1, 50);
calls1.forEach((call) => {
  setTimeout(() => dlog1(...call.inputs), call.t);
});

// Test case 2
const calls2 = [
  { t: 50, inputs: [1] },
  { t: 100, inputs: [2] },
];

let start2 = Date.now();
function log2(...inputs) {
  console.log([Date.now() - start2, inputs]);
}
const dlog2 = debounce(log2, 20);
calls2.forEach((call) => {
  setTimeout(() => dlog2(...call.inputs), call.t);
});

// Test case 3
const calls3 = [
  { t: 50, inputs: [1, 2] },
  { t: 300, inputs: [3, 4] },
  { t: 300, inputs: [5, 6] },
];

let start3 = Date.now();
function log3(...inputs) {
  console.log([Date.now() - start3, inputs]);
}
const dlog3 = debounce(log3, 150);
calls3.forEach((call) => {
  setTimeout(() => dlog3(...call.inputs), call.t);
});

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
/* Example 1:

Input: 
t = 50
calls = [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]
Output: [{"t": 125, inputs: [2]}]
Explanation:
let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
Example 2:

Input: 
t = 20
calls = [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]
Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
Explanation:
The 1st call is delayed until 70ms. The inputs were (1).
The 2nd call is delayed until 120ms. The inputs were (2).
Example 3:

Input: 
t = 150
calls = [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]
Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
Explanation:
The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
The 2nd call is cancelled by the 3rd call
The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).
  */
