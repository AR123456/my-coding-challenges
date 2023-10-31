/* Define a Node class to represent nodes in the linked list.
Define a function that takes two linked lists as input and returns the sum as a linked list. */
/* In this code, we define a Node class to represent nodes in the linked list. The addTwoNumbers function takes two linked lists (l1 and l2) as input. It iterates over both lists, performing the addition and carrying over any excess to the next iteration. The result is returned as a new linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new Node(0);
  let p = l1,
    q = l2,
    current = dummy;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new Node(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new Node(carry);
  }

  return dummy.next;
}

// Example usage
let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

let result = addTwoNumbers(l1, l2);

// Printing the result
while (result !== null) {
  console.log(result.val);
  result = result.next;
}
