const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(1);
ll.add(1);
ll.add(1);
ll.add(1);
// ll.add(3);
// ll.add(4);
// ll.add(4);
// ll.add(4);
// ll.add(5);
// ll.add(5);
// ll.add(7);

var temp = ll.head.next;
var curr = ll.head;

while(temp) {
    if(curr.data == temp.data) {
        temp = temp.next;
    }else{
        curr.next =temp;
        curr = temp;
        temp = curr.next;
    }
}
curr.next = temp;
ll.printList();