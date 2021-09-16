const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

function reverse (curr) {
    if (curr == null || curr.next == null) {
        ll.head = curr;
        return;
    }
    reverse(curr.next);
    curr.next.next = curr;
    curr.next = null;
}

reverse(ll.head);
ll.printList();