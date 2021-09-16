const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add Element to the linked list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store the current node.
        var current;

        // if list is empty add the 
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }

        this.size++;
    }


    // Insert an element at the given index in the list

    insertAt(element, index) {
        if (index < 0 || index > this.size) 
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }

            this.size++;
        }
    }

    //insert a list at bottom 
    insertBottom(node, value) {
        while (node.bottom != null) {
            node = node.bottom;
        }
        var newNode = new Node(value);
        node.bottom = newNode;
    }


    // removes and returns an element from the list from the specified index
    removeFrom(index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else{
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting the first element
            if (index == 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to remove the element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;
            
            // return the removed element
            return curr.data;  
        }
    }


    // removes the element from the list. it returns the removed element, or if it's not found it returns -1.
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // element and return true.

            if (current.data === element) {
                if (prev == null) {
                    this.head = current.next;
                }else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    // Helper Methods
    
    // Returns the index of the given element if the element is in the list

    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with the given element
            if (current.data == element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    // Returns true if the list is empty
    isEmpty() {
        return this.size == 0;
    } 

    // Returns the size of the list
    size_of_list() {
        console.log(this.size);
    }

    // Prints the content of the list.
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    printWithHead(head) {
        var str = "";
        while(head) {
            str += head.data + " ";
            head = head.next;
        }
        console.log(str);
    }
}

module.exports =  LinkedList;