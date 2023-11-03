// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // arr input a long array
  // len input the length of arrays
  // the chunkArray is an array of smaller arrays
  arr.map(function () {
    newArr = arr.pop(len);
  });
  console.log(newArr);
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
