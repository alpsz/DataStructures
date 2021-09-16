const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

function print(head) {
    if(head == null) 
        return;
    console.log(head.data);
    print(head.next);
}

print(ll.head);