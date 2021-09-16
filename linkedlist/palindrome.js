//palindrome.js

const linkedlist  = require('./LinkedList');
const reverse = require('./reverseList');

var ll = new linkedlist();
var hl = new linkedlist();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);


var fast = slow = ll.head;
while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
}

hl.head = slow.next;
slow.next = null;
hl.head = reverse.iterativeReversal(hl.head);

ll.printList();
hl.printList();

var firstHalf = ll.head;
var secondHalf = hl.head;
var isPalindrome = true;

while(firstHalf.next != null || secondHalf.next != null) {
    if (firstHalf.data != secondHalf.data) {
        isPalindrome = false;
    }
    else{
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
}

console.log(isPalindrome);

