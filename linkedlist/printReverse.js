const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(2);
ll.add(1);

function printReverse(temp) {
    if (!temp) 
        return;
    printReverse(temp.next);
    console.log(temp.data)
}

printReverse(ll.head);
