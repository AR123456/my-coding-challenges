function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
