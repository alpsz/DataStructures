const linkedlist  = require('./LinkedList');
const midpoint = require('./midpoint');


var l1 = new linkedlist();
l1.add(10);
l1.add(40);
l1.add(60);
l1.add(60);
l1.add(80);

var l2 = new linkedlist();
l2.add(10);
l2.add(20);
l2.add(30);
l2.add(40);
l2.add(50);
l2.add(60);
l2.add(90);
l2.add(100);

module.exports.optimalSpace = (a, b) => {
    var head = tail = null;
    if (a.data <= b.data) {
        head = a;
        tail = a;
        a = a.next;
    }else{
        head = b;
        tail = b;
        b = b.next;
    }

    while(a != null && b != null) {
        if (a.data >= b.data) {
            tail.next = b;
            tail = b;
            b = b.next;
        }else{
            tail.next = a;
            tail = a;
            a = a.next;
        }
    }

    if (a != null)
        tail.next = a;
    else
        tail.next = b;
    return head;
}

function extraSpace(a, b){
    var l3 = new linkedlist();

    while(a != null && b != null) {
        if(a.data >= b.data) {
            l3.add(b.data);
            b = b.next;
        }else {
            l3.add(a.data);
            a = a.next;
        }
    }
    
    if(a == null) {
        while(b != null) {
            l3.add(b.data);
            b = b.next;
        }
    }else {
        while (a != null) {
            l3.add(a.data);
            a = a.next;
        }
    }

    return l3;
}

var a = l1.head;
var b = l2.head;


//var resultList = extraSpace(a, b);
var resultList = optimalSpace(a, b);
l1.printWithHead(resultList);
