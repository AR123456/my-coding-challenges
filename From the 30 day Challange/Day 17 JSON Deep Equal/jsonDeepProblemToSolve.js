/* 
@param {any} o1
@param{any} o2
@return {boolean} */

/* Given two Objects o1 and o2 , check if they are deeply equal
For two objects to be deeply equal, they must contain the same keys and the associated values must also be deeply equal.  Two objects are considered deeply equal if th
hey pass the === Equality check. 
You may assume both objects are the output of JSON.parse. in other words they are valid JSON.  Do not solve with lodash 
*/
var areDeeplyEqual = function (o1, p2) {
  // compare 01 key value pairs to o2
  // objects can be recursive 
  // start with base case - iterate over the cases with if statements
};

// example true
let o1 = { x: 1, y: 2 };
let o2 = { x: 1, y: 2 };
// example true
let o1b = { x: 1, y: 2 };
let o2b = { y: 2, x: 1 };
// example false
let o1c = { x: null, L: [1, 2, 3] };
let o2c = { x: null, L: ["1", "2", "3"] };

const a = { a: 1 };
const b = [1, 3.4];

console.log(Array.isArray(a));
