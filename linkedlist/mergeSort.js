const linkedlist  = require('./LinkedList');
const midpoint = require('./midpoint');
const mergeSorted = require('./mergeSortedList');


var l1 = new linkedlist();
l1.add(10);
l1.add(9);
l1.add(8);
l1.add(7);
l1.add(6);
l1.add(5);
l1.add(4);
l1.add(3);

function mergeSort(head) {
    if (head == null || head.next == null) 
        return head;
    
    var left = head;
    var right = midpoint.mid(head).next;
    return mergeSorted.optimalSpace(left, right);
}

l1.printWithHead(mergeSort(l1.head));
