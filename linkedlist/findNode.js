const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

var appendIndex = 3;


var diff = ll.size - appendIndex;

var current = ll.head;
var head = ll.head;
var prev;
var it = 0;

while(it < diff) {
    prev = current;
    current = current.next;
    it++;
}

prev.next = null;
ll.head = current;

while (current.next) {
    current = current.next;
}
current.next = head;

ll.printList();






