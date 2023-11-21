// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  // Extract people's heights (excluding trees)
  const heights = a.filter((value) => value !== -1);
  console.log(heights);

  // Sort the heights in non-descending order
  heights.sort((a, b) => a - b);

  // Insert sorted heights back into the original array at non-tree positions
  //   to keep track of the current position in the sorted heights array.
  let heightIndex = 0;
  //    iterates through each element of the original array a.
  for (let i = 0; i < a.length; i++) {
    // if the current element in the original array is not a tree (not equal to -1).
    if (a[i] !== -1) {
      // replaces the current element in the original array with the corresponding sorted height from the heights array
      a[i] = heights[heightIndex];
      //   moves to the next height in the sorted array.
      heightIndex++;
      /* Loop iterates through the original array, and whenever it encounters a non-tree position, it replaces the value with the next sorted height. The heightIndex ensures that we use the heights in the correct order from the sorted array. */
    }
  }

  return a;
}

// Example usage:
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
const sortedArray = sortByHeight(a);
console.log(sortedArray); // Output: [-1, 150, 160, 170, -1, -1, 180, 190]
