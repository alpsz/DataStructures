const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(20);
ll.add(4);
ll.add(15);
ll.add(10);


// ll.head.next.next.next.next = ll.head;

function usingSet(head) {
    var set = new Set();
    while (head) {
        if(set.has(head)){
            console.log("Loop found");
            return;
        }
        else{
            set.add(head);
            head = head.next;
        }
    }
    console.log("Loop not found");
}

function usingFlag(head) {
    while(head) {
        if(head.visited == 1) {
            console.log("Loop found");
            return;
        }else{
            head.visited = 1;
            head = head.next;
        }
    }
    console.log("Loop not found");
}

function floydLoopDetection(head) {
    var slow = fast = head;
    while (slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            console.log("Loop Found");
            return;
        }
    }
    console.log("Loop not found");
}

floydLoopDetection(ll.head);