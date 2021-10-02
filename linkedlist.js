class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class LinkeList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(element) {
    // creates a new node
    var node = new Node(element);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      ++this.size;
    } else {
      this.head = node;
      ++this.size;
    }
  }

  listSize() {
    return this.size;
  }

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // prints the list items
  printList() {
    let items = [];
    let curr = this.head;
    while (curr) {
      items.push(curr.data);
      curr = curr.next;
    }
    return items;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  insertAt(index, element) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      var node = new Node(element);
      // console.log('***',node);
      let i = 0;
      if (index == 0) {
        // console.log('indesx 0 ***', node)
        // console.log('indesx 0  this.head  ***', this.head )
        node.next = this.head;
        // console.log('indesx 0 ***', node)
        this.head = node;
        // console.log('indesx 0  this.head  ***', this.head)
        ++this.size;
      } else {
        let curr = this.head;
        while (curr) {
          // console.log('i *** index ', i , index, curr)
          if (i == index) {
            node.next = curr.next;
            curr.next = node;
            this.size++;
            break;
          }
          curr = curr.next;
          i++;
        }
      }
    }

  }

  removeFrom(index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      if (index == 0) {
        this.head = this.head.next;
        --this.size;
      } else {
        let curr = this.head;
        let prev;
        let i = 0;
        while (curr) {
          if (i == index) {
            prev.next = curr.next;
            curr = prev;
            this.size--;
            break;
          }
          prev = curr;
          curr = curr.next;
          i++;
        }
      }
    }

  }

  // removes a given element from the
  // list
  removeElement(element) {

  }

  reverseList() {
    let prev = null;
    let next = null;
    let current = this.head;
    while (current != null) {
      next = current.next;
      console.log('next**',next);
      current.next=prev;
      console.log('current**',current);
      prev = current;
      console.log('prev**',prev);
      current = next;
      console.log('current**',current);
    }
    this.head=prev;
    // return prev;
  }

}

let linkeListInstance = new LinkeList();
linkeListInstance.addNode(1);
linkeListInstance.addNode(2);
linkeListInstance.addNode(3);
// linkeListInstance.addNode(4);
console.log(JSON.stringify(linkeListInstance));
linkeListInstance.reverseList()
console.log(JSON.stringify(linkeListInstance));
// console.log(JSON.stringify(linkeListInstance));
// console.log(linkeListInstance.listSize());
// console.log(linkeListInstance.isEmpty());
// console.log(linkeListInstance.printList());
// linkeListInstance.insertAt(2, 5);
// console.log(JSON.stringify(linkeListInstance));
// linkeListInstance.insertAt(0, 6);
// console.log(JSON.stringify(linkeListInstance));
// console.log(linkeListInstance.printList());
// linkeListInstance.removeFrom(0);
// console.log(JSON.stringify(linkeListInstance));
// console.log(linkeListInstance.printList());
// linkeListInstance.removeFrom(1);
// console.log(JSON.stringify(linkeListInstance));
// console.log(linkeListInstance.printList());

