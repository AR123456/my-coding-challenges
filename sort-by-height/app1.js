// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
a = [-1, 150, 190, 170, -1, -1, 160, 180];
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  // hole position of the -1
  const arr1 = [];
  // hold the values that are not -1
  const arr2 = [];
  a.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  const sortArr = arr2.sort((a, b) => a - b);
  // spline need index of array one , 0 and the actual value being inserted
  //   array.splice(index, howmany to remove, element to be added)
  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  //   console.log(arr1, arr2);
  console.log(sortArr);
}

sortByHeight(a);
