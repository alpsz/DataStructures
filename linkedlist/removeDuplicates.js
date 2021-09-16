const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(20);
ll.add(13);
ll.add(13);
ll.add(11);
ll.add(11);
ll.add(11);

function removeFromSorted(head) {
    var prev = null;
    var curr = head;
    var unique = new Set();
    while (curr) {
        if (!unique.has(curr.data)) {
            unique.add(curr.data);
            prev = curr;
            curr = curr.next;
        }else{
           prev.next = curr.next;
           curr = curr.next;
        }
    }
}

function twoPointerRemoval(head) {
    var prev = head;
    var curr = head.next;
    while (curr) {
        if (prev.data == curr.data) {
            prev.next = curr.next;
            curr = curr.next;
        }else{
            prev = curr;
            curr = curr.next;
        }
    }
}

twoPointerRemoval(ll.head);
ll.printList();