// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
let arr = [2, 3, 4, 6, 6, "hello"];
remove1 = 2;
remove2 = 6;
function seekAndDestroy(arr, remove1, remove2) {
  place1 = arr.indexOf(remove1);
  arr.splice(remove1, remove1);
  place2 = arr.indexOf(remove2);
  arr.splice(remove2, place2);

  console.log(arr);
}
seekAndDestroy(arr, remove1, remove2);
