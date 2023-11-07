// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // sol2
  // foreach higher order function
  const chunkedArray = [];
  // loop through arr
  arr.forEach(function (val) {
    // get last element
    const last = chunkedArray[chunkedArray.length - 1];
    // will do this for every loop
    // check if there is a last ( not undefined) and if the last length = len
    if (!last || last.length === len) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
    // console.log(last);
  });
  console.log(chunkedArray);
  return chunkedArray;
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
