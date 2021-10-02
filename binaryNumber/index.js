"use strict";
const Queue = require('./Queue.js');
function findBin(n) {
    let result = [];
    let myQueue = new Queue();
    var s1, s2;
    myQueue.enqueue("1");
    for (var i = 0; i < n/2; i++) {
// console.log(myQueue.items[i])
        // result.push(myQueue.dequeue());

        // s1 = result[i] + "0";
        // s2 = result[i] + "1";
        s1 = myQueue.items[i] + "0";
        s2 = myQueue.items[i] + "1";
        myQueue.enqueue(s1);
        myQueue.enqueue(s2);

    }
// console.log(myQueue)
    // return result;
    return myQueue.items;
}

console.log(findBin(10));