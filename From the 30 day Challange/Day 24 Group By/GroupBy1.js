/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((result, item) => {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];

const fn1 = function (item) {
  return item.id;
};

const output1 = array1.groupBy(fn1);
console.log(output1);
const array2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
// { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }
const fn2 = function (list) {
  return String(list[0]);
};

const output2 = array2.groupBy(fn2);
console.log(output2);
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// { '1': [ [ 1, 2, 3 ], [ 1, 3, 5 ], [ 1, 5, 9 ] ] }
const fn3 = function (n) {
  return String(n > 5);
};

const output3 = array3.groupBy(fn3);
console.log(output3);
// { false: [ 1, 2, 3, 4, 5 ], true: [ 6, 7, 8, 9, 10 ] }
