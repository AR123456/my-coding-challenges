/*
A real-life use case for the sortBy function could involve sorting a collection of objects based on a specific property or value associated with those objects. Here's an example:

Imagine you're building a web application that displays a list of products from an online store. Each product is represented as an object with properties like name, price, and rating. You want to provide sorting options to the users, such as sorting by price or sorting by rating.

You can use the sortBy function to dynamically sort the list of products based on the user's chosen sorting criteria. Here's how you could implement it:
*/
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// Sample array of products
var products = [
  { name: "Product A", price: 20, rating: 4.5 },
  { name: "Product B", price: 15, rating: 3.8 },
  { name: "Product C", price: 30, rating: 4.2 },
  // ... more products
];

// Function to sort products by a specific property
// Define a function named 'sortBy' that takes an array 'arr' and a function 'fn' as parameters.
var sortBy = function (arr, fn) {
  // Create a shallow copy of the input array 'arr' using the 'slice()' method.
  // This copy is used for sorting, ensuring that the original array remains unmodified.
  return (
    arr
      .slice()
      // Use the 'sort()' method to sort the copied array.
      /* The sort() method expects a comparator function that defines the sorting order. Here, (a, b) => fn(a) - fn(b) is used as the comparator function.
          a and b are two elements being compared during the sorting process.
          fn(a) extracts a value from element a using the provided function fn.
          fn(b) extracts a value from element b using the same function fn.
          fn(a) - fn(b) calculates the difference between the extracted values of elements a and b.
          If the result is negative, it means a should come before b in the sorted order.
          If the result is positive, it means b should come before a in the sorted order.
          If the result is zero, the order remains unchanged. 
          The sort() method uses the comparison results to reorder the elements in the copied array based on the extracted values provided by the fn function.

          The sortBy function returns the sorted array.*/
      /*  */
      .sort((a, b) => fn(a) - fn(b))
  );
};

// Sorting options
var sortByPrice = (product) => product.price;
var sortByRating = (product) => product.rating;

// User selects sorting by price
var sortedByPrice = sortBy(products, sortByPrice);
console.log(sortedByPrice);

// User selects sorting by rating
var sortedByRating = sortBy(products, sortByRating);
console.log(sortedByRating);
