// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

let sourceArr = [[1, 2], [3, 4], [5, 6], [7]];
function flattenArray(arrays) {
  // concats apply method
  //  property from concat() that does the heavy lifting, “apply” just executes the method
  //  this just returns what was put in
  console.log([].concat(arrays));
  // apply pass in empty array - apply takes a single array
  // apply unwravels the array by one leve;
  console.log([].concat.apply([], arrays));
}
flattenArray(sourceArr);
