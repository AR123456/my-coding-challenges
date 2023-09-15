/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
 * Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// /////////////////solve this problem using a depth-first search (DFS) algorithm to traverse the binary tree and keep track of the current path sum
// use this hasPathSum function to check if there exists a root-to-leaf path in the binary tree with a sum equal to targetSum. Simply call it with the root node and the target sum as arguments
var hasPathSum = function (root, targetSum) {
  // Helper function to perform DFS
  function dfs(node, currentSum) {
    if (!node) return false; // If the node is null, return false

    currentSum += node.val; // Add the current node's value to the current sum

    if (!node.left && !node.right) {
      // If it's a leaf node, check if the current sum equals the target sum
      return currentSum === targetSum;
    }

    // Recursively check the left and right subtrees
    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  }

  return dfs(root, 0); // Start DFS from the root with an initial sum of 0
};
/* Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:
Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:
Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
  */
// Example 1
//////////////need to define constructor
/* This constructor takes three parameters:

val: The value of the node.
left: The left child of the node.
right: The right child of the node.
If any of these parameters is not provided (i.e., it's undefined), it defaults to null. */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
const targetSum1 = 22;
console.log(hasPathSum(root1, targetSum1)); // Output: true

// Example 2
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const targetSum2 = 5;
console.log(hasPathSum(root2, targetSum2)); // Output: false

// Example 3
const root3 = null;
const targetSum3 = 0;
console.log(hasPathSum(root3, targetSum3)); // Output: false
