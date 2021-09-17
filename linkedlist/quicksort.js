const linkedlist  = require('./LinkedList');


var ll = new linkedlist();
ll.add(40);
ll.add(20);
ll.add(60);
ll.add(10);
ll.add(50);
ll.add(30);

function partition (head) {
    var pivot = null;
    var curr = head;
    while (curr.next != null)
        curr = curr.next;
    pivot = curr;
    var i = head;
    var j = head;
    while(j.next.next) {
        if(j.data <= pivot.data) {
            var temp = i.data;
            i.data = j.data;
            j.data = temp;
            i = i.next;
        }else{
            j = j.next;
        }
    }
    var temp = i.data;
    i.data = pivot.data;
    pivot.data = temp;
    return i.next;
}

function quickSort() {
    
}

partition(ll.head);
ll.printList();

