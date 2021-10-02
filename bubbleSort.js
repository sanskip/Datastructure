class BubbleSort {
    constructor() {

    }
    sort(arr) {
        if (!arr) {
            return "Array is available !!"
        }
        if (!arr.length) {
            return "Empty Array !!"
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}

let bubbleSort = new BubbleSort();
console.log(bubbleSort.sort());
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort.sort(arr));
arr = [];
console.log(bubbleSort.sort(arr));