const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.printList();

module.exports.mid = (head) => {
    var slow = head;
    var fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};