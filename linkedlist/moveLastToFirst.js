const linkedlist  = require('./LinkedList');

var ll = new linkedlist();
ll.add(10);
ll.add(15);
ll.add(12);
ll.add(13);
ll.add(20);
ll.add(14);

function moveLast(head) {
    var curr = head;
    var prev = null;
    while(curr.next) {
        prev = curr;
        curr = curr.next;
    }
    curr.next = head;
    prev.next = null;
    ll.head = curr; 
}

moveLast(ll.head);
ll.printList();
