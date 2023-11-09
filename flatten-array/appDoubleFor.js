// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
let sourceArr = [[1, 2], [3, 4], [5, 6], [7]];
function flattenArray(arrays) {
  // using a double for loop
  let result = [];
  //   outer loop (i) iterates through the sub-arrays
  for (let i = 0; i < arrays.length; i++) {
    console.log("i", i, result);
    // j) iterates through the elements of each sub-array
    for (let j = 0; j < arrays[i].length; j++) {
      console.log("j", j, result);
      result.push(arrays[i][j]);
    }
  }
  console.log(result);
}
flattenArray(sourceArr);
