class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const subscription = { callback };
    this.events[eventName].push(subscription);

    return {
      unsubscribe: () => {
        const index = this.events[eventName].indexOf(subscription);
        if (index !== -1) {
          this.events[eventName].splice(index, 1);
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }

    return this.events[eventName].map((subscription) =>
      subscription.callback(...args)
    );
  }
}

const emitter = new EventEmitter();

// Example 1
const sub1 = emitter.subscribe("firstEvent", () => 5);
const sub2 = emitter.subscribe("firstEvent", () => 6);
console.log(emitter.emit("firstEvent")); // Output: [5, 6]

// Example 2
const sub3 = emitter.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // Output: ["1,2,3"]
console.log(emitter.emit("firstEvent", [3, 4, 6])); // Output: ["3,4,6"]

// Example 3
const sub4 = emitter.subscribe("firstEvent", (...args) => args.join(","));
console.log(emitter.emit("firstEvent", [1, 2, 3])); // Output: ["1,2,3"]
sub4.unsubscribe();
console.log(emitter.emit("firstEvent", [4, 5, 6])); // Output: []

// Example 4
const sub5 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub6 = emitter.subscribe("firstEvent", (x) => x + 2);
sub5.unsubscribe();
console.log(emitter.emit("firstEvent", [5])); // Output: [7]
