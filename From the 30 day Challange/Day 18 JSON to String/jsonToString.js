/* 
@param {any} object 
@param {string}
*/

var jsonStringify = function (object) {
  // make the json a string without using the built in method
  // no extra spaces
  // order of keys should be same as the order returned by Object.keys()
  /// check is object null or undefined if it is then convert to string
  if (object === null || object === undefined) {
    return String(object);
  }
  // arrays []
  if (Array.isArray(object)) {
    // map every object in the array to a new object
    const values = object.map((obj) => jsonStringify(obj));
    // join and delimit with a comma

    return `[${values.join(",")}]`;
  }

  // objects {}
  if (typeof object === "object ") {
    const keys = Object.keys(object);
    const keyValPairs = keys.map(
      (key) => `"${key}": ${jsonStringify(object[key])}`
    );
    return `{${keyValPairs.join(",")}}`;
  }
  // strings
  if (typeof object === "string") {
    return `"${String(object)}"`;
  }
  // strings "" or numbers  since we checked everything else this is all that is left
  return String(object);
};
