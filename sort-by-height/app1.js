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
  console.log(arr1, arr2);
  holderArr = arr2.sort();
  console.log(holderArr);
}

sortByHeight(a);
