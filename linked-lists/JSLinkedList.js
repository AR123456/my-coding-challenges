class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                     }
//                 }
//             }
//         }
//     }
// };
/* Some LinkedList methods
Next up, we will implement four helper methods for the linked list. They are:

size()
clear()
getLast()
getFirst()
1. size()
This method returns the number of nodes present in the linked list. */
size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
/*2. clear()
This method empties out the list. */
clear() {
    this.head = null;
}
/* 3. getLast()
This method returns the last node of the linked list. */
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
/* 4. getFirst()
This method returns the first node of the linked list. */
getFirst() {
    return this.head;
}