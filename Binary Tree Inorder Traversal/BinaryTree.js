/**
 * Binary tree
In computer science, a binary tree is a k-ary k=2 tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  const traverse = (node) => {
    if (node !== null) {
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  };

  traverse(root);

  return result;
};
// Example 1:
const root1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
const result1 = inorderTraversal(root1);
console.log(result1); // Output: [1, 3, 2]

// Example 2:
const root2 = null;
const result2 = inorderTraversal(root2);
console.log(result2); // Output: []

// Example 3:
const root3 = {
  val: 1,
  left: null,
  right: null,
};
const result3 = inorderTraversal(root3);
console.log(result3); // Output: [1]

/* Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1] */
