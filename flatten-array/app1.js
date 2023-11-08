// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
let sourceArr = [[1, 2], [3, 4], [5, 6], [7]];
function flattenArray(arrays) {
  let newArr = [];
  let acc;
  // use reduce  reduce(accumulator,callbackFunction())

  arrays.reduce(acc, function () {
    for (let acc = 0; acc < sourceArr.length; acc++) {
      sourceArr.concat(newArr);
    }
    console.log(newArr);
  });
}
flattenArray(sourceArr);
