/* This defines a basic ListNode class that represents a node in a singly-linked list. Each node has a val property to store the value of the node and a next property pointing to the next node in the list. */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* This function takes two sorted linked lists l1 and l2 as input and returns a merged sorted linked list. It iterates through both lists, comparing the values of the current nodes from each list and appending the smaller value to the merged list. The iteration continues until either l1 or l2 becomes null. Once one of the lists is exhausted, the remaining nodes from the other list are simply appended to the merged list. The function finally returns the head of the merged list. */
var mergeTwoLists = function (l1, l2) {
  const dummyNode = new ListNode(-1);
  let current = dummyNode;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  return dummyNode.next;
};
/* createLinkedList: This function takes an array and creates a linked list by iterating through the array and creating nodes with the values in the array. It returns the head of the linked list. */
// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
/* linkedListToArray: This function takes the head of a linked list and converts it into an array by traversing the list and pushing the values into the array. It returns the resulting array. */
// Helper function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
/* The examples at the bottom demonstrate the usage of the mergeTwoLists function along with the helper functions. They create linked lists, merge them, and then print the resulting merged lists using the linkedListToArray function.

This code is a complete implementation of merging two sorted linked lists into a single sorted linked list. It showcases a basic use of linked list manipulation and merging techniques */
// Example 1
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]

// Example 2
const emptyList1 = createLinkedList([]);
const emptyList2 = createLinkedList([]);
const emptyMergedList = mergeTwoLists(emptyList1, emptyList2);
console.log(linkedListToArray(emptyMergedList)); // Output: []

// Example 3
const emptyList = createLinkedList([]);
const singleElementList = createLinkedList([0]);
const singleElementMergedList = mergeTwoLists(emptyList, singleElementList);
console.log(linkedListToArray(singleElementMergedList)); // Output: [0]
