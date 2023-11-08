// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
let sourceArr = [[1, 2], [3, 4], [5, 6], [7]];
function flattenArray(arrays) {
  // use reduce  reduce accumulator,callbackFunction
  // concat b onto a
  return arrays.reduce(function (a, b) {
    console.log(a.concat(b));
    return a.concat(b);
  });
}
flattenArray(sourceArr);
