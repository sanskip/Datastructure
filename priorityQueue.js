// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {

    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    // functions to be implemented
    // enqueue(item, priority)
    // dequeue()
    // front()
    // isEmpty()
    // printPQueue()

    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let highestPriority = false;
        if (this.items.length) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].priority > qElement.priority) {
                    this.items.splice(i, 0, qElement);
                    highestPriority = true
                    break;
                }
            }
            // if the element have the highest priority
            // it is added at the end of the queue
            if (!highestPriority) {
                this.items.push(qElement);
            }

        } else {
            this.items.push(qElement);
        }
    }
    // isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "underflow";
        } else {
            this.items.shift();
        }
    }
    // printQueue function
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
        return str;
    }
    // front function
    front() {
        // returns the Front element of
        // the queue without removing it.
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    // rear function (last element)
    rear() {
        // returns the Front element of
        // the queue without removing it.
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[this.items.length - 1];
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1, 5);
priorityQueue.enqueue(2, 4);
priorityQueue.enqueue(0, 6);
priorityQueue.enqueue(4, 2);
priorityQueue.enqueue(3, 3);
console.log(priorityQueue);
priorityQueue.dequeue();
console.log(priorityQueue);
console.log(priorityQueue.printQueue());
console.log(priorityQueue.front());
console.log(priorityQueue.rear());