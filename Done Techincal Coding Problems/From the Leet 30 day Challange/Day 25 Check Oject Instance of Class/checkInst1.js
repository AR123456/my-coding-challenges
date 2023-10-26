/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
/* To solve this problem, you can use the instanceof operator in JavaScript. However, since you mentioned that we should consider an object an instance if it has access to the class's methods, we can't rely solely on instanceof. Instead, we need to check if the object's prototype chain contains the prototype of the given class. */
var checkIfInstanceOf = function (obj, classFunction) {
  // Get the prototype of the class function
  var classPrototype = classFunction.prototype;

  // Traverse the prototype chain of the object
  var prototype = Object.getPrototypeOf(obj);
  while (prototype !== null) {
    // If we find a match, return true
    if (prototype === classPrototype) {
      return true;
    }
    // Move up the prototype chain
    prototype = Object.getPrototypeOf(prototype);
  }

  // If we reach the end of the prototype chain without a match, return false
  return false;
};

// Examples
console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(new Date(), Object)); // true
console.log(checkIfInstanceOf(new Date(), Function)); // false

class Animal {}
class Dog extends Animal {}

console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(new Dog(), Object)); // true

console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
