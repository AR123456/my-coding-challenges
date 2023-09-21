var filter = function (arr, fn) {
  var filteredArr = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};
