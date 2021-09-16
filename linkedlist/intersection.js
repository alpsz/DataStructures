const linkedlist  = require('./LinkedList');

var l1 = new linkedlist();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);

var l2 = new linkedlist();
l2.add(2);
l2.add(3);
l2.add(4);
l2.add(8);


function intersection (p1, p2) {
    var l3 = new linkedlist();

    while(p1 != null && p2 != null) {
        if(p1.data == p2.data) {
            l3.add(p1.data);
            p1 = p1.next;
            p2 = p2.next;
        }else {
            if (p1.data < p2.data) {
                p1 = p1.next;
            }else{
                p2 = p2.next;
            }
        }
    }
    l3.printList();
}

intersection(l1.head, l2.head);