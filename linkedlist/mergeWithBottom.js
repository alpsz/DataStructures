const linkedlist  = require('./LinkedList');

var l1 = new linkedlist();
var input = {
               5:[2,35,28,30],
               8:[1,9,13,17],
               10:[3,6],
               3:[5,4]
            }



Object.entries(input).forEach(element => {
    l1.add(element[0]);
    var curr = l1.head;
    while (curr.next != null){
        curr = curr.next;
    }
    element[1].forEach(value => {
        l1.insertBottom(curr, value);
    })
    curr = curr.next;
});

// console.log(l1.head.data);
console.log(l1.head.next.bottom.data);
// console.log(l1.head.bottom.bottom.data);
// l1.printList();