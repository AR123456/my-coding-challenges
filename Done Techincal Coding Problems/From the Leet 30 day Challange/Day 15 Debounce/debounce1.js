var debounce = function (fn, t) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// Example usage:
const log = debounce((...args) => {
  console.log(...args);
}, 100);

log("Hello"); // This will be cancelled
log("Hello"); // This will be cancelled
log("Hello, really"); // This will be executed after 100ms
