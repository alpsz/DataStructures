const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
// ll.add(6);

function swap(head) {
    var node = head;
    while (node!= null && node.next != null) {
        var k = node.data;
        node.data = node.next.data;
        node.next.data = k;
        node = node.next.next;
    }
}

swap(ll.head);
ll.printList();
