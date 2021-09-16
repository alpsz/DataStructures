const linkedlist  = require('./LinkedList');

var l1 = new linkedlist();
l1.add(10);
l1.add(9);
l1.add(8);
l1.add(7);
l1.add(6);
l1.add(5);
l1.add(4);
l1.add(3);

function nthNode(head, n){
    var curr = head;
    while (curr && n > 0) {
        --n;
        curr = curr.next;
    }
    return curr.data;
}

function nthBackNode(head, n){
    var curr = head;
    while (curr && n > 0) {
        --n;
        curr = curr.next;
    }
    return curr.data;
}

function recursiveNth(head, count) {
    if(head == null) {
        return;
    }

    if (count == 0)
        return head.data;
    return recursiveNth(head.next, --count); 
}
var i = 0;
function printNthFromLast(head , n)
{
    if (head == null)
        return;
    printNthFromLast(head.next, n);
 
    if (++i == n)
        console.log(head.data);
}

function twoPointers(head, n) {
    var main = ref = head;
    var count = 1;
    while(count != n && ref.next != null) {
        ref = ref.next;
        count++;
    }
    while(ref.next != null) {
        ref = ref.next;
        main = main.next;
    }
    console.log(main.data);
}

twoPointers(l1.head, 10);