const { JSDOM } = require("jsdom");
const fetch = require("node-fetch");

/**
 * Generator function to traverse the DOM tree
 * @param {HTMLElement} element - The root element to start traversal
 */
function* traverseDOM(element) {
  yield element; // Yield the current element

  for (const child of element.children) {
    yield* traverseDOM(child); // Recursively yield children
  }
}

// Example usage:
(async () => {
  //   const url = "https://example.com"; // URL to scrape
  const url = "https://www.traversymedia.com"; // URL to scrape

  try {
    const response = await fetch(url); // Fetch the web page
    const html = await response.text(); // Get the HTML content

    const dom = new JSDOM(html);
    const doc = dom.window.document; // Access the document

    const generator = traverseDOM(doc.documentElement); // Start traversal

    // Iterate through the DOM elements
    for (const element of generator) {
      console.log(element.tagName);
    }
  } catch (error) {
    console.error("Error fetching or parsing the web page:", error);
  }
})();
