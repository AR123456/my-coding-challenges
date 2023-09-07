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
/* Definition of ListNode:

The code starts by defining a constructor function ListNode(val) to create nodes for a singly-linked list.
Each node has two properties: val, which stores the value of the node, and next, which is initially set to null but will later point to the next node in the list */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/* hasCycle Function:

This is the main function that determines if a given linked list has a cycle or not.
It takes the head of the linked list as its input. */
var hasCycle = function (head) {
  /* Initial Check:

The first thing the function does is check if there are fewer than two nodes in the list. If head is null or head.next is null, it returns false because a cycle cannot exist in such a short list. */
  if (!head || !head.next) {
    return false; // No cycle if there are less than 2 nodes
  }
  /* Two Pointers Approach:

The function uses two pointers, slow and fast, initially both set to the head of the linked list. */
  let slow = head;
  let fast = head;
  /* Cycle Detection Loop:

The core of the algorithm is a loop that advances slow one step at a time and fast two steps at a time.
If there is a cycle in the linked list, the fast pointer will eventually catch up to the slow pointer. */
  while (fast && fast.next) {
    slow = slow.next; // Move one step at a time
    fast = fast.next.next; // Move two steps at a time
    /* Meeting Point:

If the two pointers ever meet (i.e., slow becomes equal to fast), this means that there is a cycle in the linked list. */
    if (slow === fast) {
      return true; // If they meet, there's a cycle
    }
  }
  /* Return Value:

If a cycle is detected, the function returns true to indicate that the linked list has a cycle.
If the loop completes without finding a cycle (i.e., fast reaches the end of the list), the function returns false to indicate that there is no cycle. */
  return false; // If fast reaches the end, there's no cycle
};
/* In summary, the code uses the "tortoise and hare" approach with two pointers to traverse the linked list. If there's a cycle, the fast pointer will eventually catch up to the slow pointer, indicating the presence of a cycle. If no cycle is found, the function returns false. */

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
