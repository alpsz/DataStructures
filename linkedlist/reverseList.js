module.exports.iterativeReversal = (head) => {
    var current = head;
    var next = prev = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}

