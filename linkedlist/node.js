class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        //this.bottom = null;
        this.visited = 0;
    }
}

module.exports = Node;