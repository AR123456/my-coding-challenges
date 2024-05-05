// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

const arr = [2, 3, 4, 6, 6, "hello"];
const remove = [2, 6];

function seekAndDestroy(arr, ...toRemove) {
  for (let i = 0; i < arr.length; i++) {
    if (toRemove.includes(arr[i])) {
      arr.splice(i, 1);
      i--; // Since we removed an element, adjust the index
    }
  }
  return arr;
}

const result = seekAndDestroy(arr, ...remove);
console.log(result); // Output: [3, 4, "hello"]
