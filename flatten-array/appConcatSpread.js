// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
let sourceArr = [[1, 2], [3, 4], [5, 6], [7]];
function flattenArray(arrays) {
  // es6 spread operator expand an iterable array into arguments
  flat = [].concat(...sourceArr);
  console.log(flat);
  console.log(flat.length);
}
flattenArray(sourceArr);
