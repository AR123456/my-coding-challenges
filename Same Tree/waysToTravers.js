class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/* In-order traversal: In this method, we first visit the left subtree, then the root node, and finally the right subtree. Here’s an example implementation using recursion: */
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // 4 2 5 1 3
/* Pre-order traversal: In this method, we first visit the root node, then the left subtree, and finally the right subtree. Here’s an example implementation using recursion: */
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

preOrderTraversal(root); // 1 2 4 5 3

/* Post-order traversal: In this method, we first visit the left subtree, then the right subtree, and finally the root node. Here’s an example implementation using recursion: */
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
  }
}
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

postOrderTraversal(root); // 4 5 2 3 1

/* Level-order traversal: In this method, we visit all nodes at a given level before moving on to the next level. This can be implemented using a queue data structure: */
function levelOrderTraversal(root) {
  if (root === null) {
    return;
  }

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.val);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

levelOrderTraversal(root); // 1 2 3 4 5
