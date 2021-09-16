const linkedlist  = require('./LinkedList');
const node = require('./node');

var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

function deleteNode(curr, index) {
    if(index < 1)
        return curr;
    if(curr == null)
        return curr;
    if(index == 1) 
        return curr.next;
    curr.next = deleteNode(curr.next, index - 1);
    return curr;
}

ll.head = deleteNode(ll.head, 5);
ll.printList();