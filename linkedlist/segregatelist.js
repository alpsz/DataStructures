const linkedlist  = require('./LinkedList');
const Node = require('./node');


var ll = new linkedlist();
// ll.add(17);
// ll.add(15);
// ll.add(8);
// ll.add(9);
ll.add(2);
ll.add(4);
ll.add(6);
// ll.add(1);
// ll.add(7);
// ll.add(6);

function segregate(head, N) {
    let last = curr = head;
    let prev = null;

    while(last.next){
        last = last.next;
    }
    
    while(N > 0) {
        if(curr.data % 2 == 0) {
            prev = curr;
            curr = curr.next;    
        }
        else{
            var newNode = new Node(curr.data);
            last.next = newNode;
            last = last.next;
            curr = curr.next;
            if(prev == null){
                head = curr;
            }else{
                prev.next = curr;
            }
        }
        --N;
        ll.printWithHead(head);
    }
    
}

var head = segregate(ll.head, ll.size);
ll.printWithHead(head);