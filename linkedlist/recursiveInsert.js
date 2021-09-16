const linkedlist  = require('./LinkedList');
const node = require('./node');

var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

function insert(curr, count, index, data) {
    if(curr === null)
        return;
    if(index == 1) {
        var newNode = new node(data);
        newNode.next = ll.head;
        ll.head = newNode;
        return;
    }

    if(count == index) {
        var newNode = new node(data);
        newNode.next = curr.next;
        curr.next = newNode;
        return;
    } else 
        insert(curr.next, ++count, index, data);
    
}

insert(ll.head, 1, 4, 5);
ll.printList();