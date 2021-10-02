// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // reverse the stack
    reverse(){
        let index = this.size()-1;
        let temp=[];
        while(index>=0){
            temp.push(this.items[index])
            // console.log('index',this.items[index]);
            index--;
        }
        return temp;
    }
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log('1',stack.items);
console.log('2',stack.reverse());
stack.remove();
console.log('3',stack.items);

console.log('4',stack.peek());

console.log('5',stack.isEmpty());

console.log('6',stack.size());

stack.clear();
console.log('7',stack.items);