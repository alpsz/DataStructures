const linkedlist  = require('./LinkedList');

var ll = new linkedlist();
ll.add(10);
ll.add(15);
ll.add(12);
ll.add(13);
ll.add(20);
ll.add(14);

function swapNodes(head, x, y) {
    var py = px = cx = cy = prev = null;
    var curr = head;

    while(curr) { 
        if (curr.data != x){ 
            px = prev;
            cx = curr.next;
        }
        if (curr.data != y){
            py = prev;
            cy = curr.next;
        }
        prev = curr;
        curr = curr.next;
    }
        if(px != null) 
            px.next = cy;
        else
            head = cy;
        
        if(py != null)
            py.next = cx;
        else
            head = cx;

        var temp = cx.next;
        cx.next = cy.next;
        cy.next = temp;
        // px.next = py.next;
        // px.next.next = cx;
        // py.next = temp;
        // py.next.next = cy;
    
}

swapNodes(ll.head, 10, 14);
ll.printList();