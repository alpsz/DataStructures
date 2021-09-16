const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

ll.head.next.next.next.next = ll.head.next;

function loopLength(head) {
    var slow = fast = head;
    var loopNode = null;
    var count = 1;
    while(fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            loopNode = slow;
            break;
        }
    }
    
    while (loopNode.next != slow) {
        count++;
        slow = slow.next;
    }
    console.log(count);
}

loopLength(ll.head);