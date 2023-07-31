//Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.
// 0 <= arr.length <= 1000
// extending the Array.prototype object. In JavaScript, Array.prototype contains all the built-in methods that can be used with arrays
//dd a new method called last to the Array.prototype object by assigning a function to it
Array.prototype.last = function () {
  //inside the last function, we check the length of the array using this.length. The this keyword refers to the array on which the method is called. So, when you call arr.last(), this will refer to arr.
  if (this.length === 0) {
    // If the array is empty (length is 0), we return -1 as specified in the requirements: "If there are no elements in the array, it should return -1."

    console.log(-1);
    return -1;
  } else {
    // if the array is not empty (length is greater than 0), we return the last element of the array using this[this.length - 1]. Arrays are zero-indexed in JavaScript, so the last element is at index this.length - 1
    console.log(this[this.length - 1]);
    return this[this.length - 1];
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
// Input: nums = [null, {}, 3]
//Output: 3
//Explanation: Calling nums.last() should return the last element: 3.
const arr = [];
arr.last();
