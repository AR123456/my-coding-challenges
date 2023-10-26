/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function (init) {
//   // need to know the current count and be able to reset it
//   let count = init;
//   //  in the end need to return an object
//   // define the methods - they all have access to init
//   function increment() {
//     // doesent need a param , already has access to init
//     // increment and then return
//     return ++count;
//   }
//   function decrement() {
//     // doesent need a param , already has access to init
//     // decrement and then return
//     return --count;
//   }
//   function reset() {
//     // reset count ot initial value
//     count = init;
//     return count;
//   }
//   //expose them by returning an object
//   return {
//     // the object
//     increment: increment,
//     decrement: decrement,
//     reset: reset,
//   };
// };
class Counter {
  constructor(init) {
    // classes can take advantage of this
    // create a member variable so that the methods can take advantage of the init variable being passed into constructor
    this.init = init;
    this.count = init;
  }
  //
  increment() {
    return ++this.count;
  }
  decrement() {
    return --this.count;
  }

  reset() {
    this.count = this.init;
    return this.count;
  }
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
