/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false; // No cycle if there are less than 2 nodes
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move one step at a time
    fast = fast.next.next; // Move two steps at a time

    if (slow === fast) {
      return true; // If they meet, there's a cycle
    }
  }

  return false; // If fast reaches the end, there's no cycle
};
/* Example 1:
  
  
  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
  Example 2:
  
  
  Input: head = [1,2], pos = 0
  Output: true
  Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
  Example 3:
  
  
  Input: head = [1], pos = -1
  Output: false
  Explanation: There is no cycle in the linked list.
    */
// Create a linked list with a cycle
const head1 = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const node4 = new ListNode(-4);

head1.next = node2;
node2.next = node0;
node0.next = node4;
node4.next = node2; // Cycle back to the second node

const result1 = hasCycle(head1);
console.log(result1); // Output: true
//////////////
// Create a linked list with a cycle
const head2 = new ListNode(1);
const node2_2 = new ListNode(2);

head2.next = node2_2;
node2_2.next = head2; // Cycle back to the head node

const result2 = hasCycle(head2);
console.log(result2); // Output: true
//////////////////////////
// Create a linked list with no cycle
const head3 = new ListNode(1);

const result3 = hasCycle(head3);
console.log(result3); // Output: false
