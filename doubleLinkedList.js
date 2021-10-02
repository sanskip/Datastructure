class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(element) {
        const node = new Node(element);
        if (this.size) {
            this.size++;
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
            this.size++;
        }
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addNode(1);
doubleLinkedList.addNode(2);
doubleLinkedList.addNode(3);
console.log('*********', doubleLinkedList.head);