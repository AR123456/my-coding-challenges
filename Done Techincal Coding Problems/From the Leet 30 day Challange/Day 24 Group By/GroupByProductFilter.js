/**
 * @param {Function} fn
 * @return {Object}
 */
/* In this example, we first define the groupBy function. Then, we have an array of products, each with an id, name, and category.

We use groupBy to group the products by their category. After grouping, groupedProducts will be an object where the keys are the categories and the values are arrays of products within each category.

To filter for all Electronics products, we can simply access groupedProducts['Electronics'], which will give us an array of Electronics products.

This approach makes it easier to organize and access data when you need to filter or search for specific elements based on their attributes. */
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

const products = [
  { id: 1, name: "Product A", category: "Electronics" },
  { id: 2, name: "Product B", category: "Books" },
  { id: 3, name: "Product C", category: "Electronics" },
  { id: 4, name: "Product D", category: "Books" },
  { id: 5, name: "Product E", category: "Clothing" },
];

const groupedProducts = products.groupBy((product) => product.category);

// Now, let's say you want to filter for all Electronics products:
const electronicsProducts = groupedProducts["Electronics"];

console.log(electronicsProducts);
