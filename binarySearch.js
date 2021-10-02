class BinarySearch {
    constructor() {

    }

    binarySearch(sortedArray, element) {
        let start = 0, end = sortedArray.length - 1;

        // Iterate while start not meets end
        while (start <= end) {

            // Find the mid index
            let mid = Math.floor((start + end) / 2);

            // If element is present at mid, return True
            if (sortedArray[mid] === element) return true;

            // Else look in left or right half accordingly
            else if (sortedArray[mid] < element)
                start = mid + 1;
            else
                end = mid - 1;
        }

        return false
    }
}

let binarySearch = new BinarySearch();
let arr = [1, 3, 5, 7, 8, 9];
let ele = 10;
console.log(binarySearch.binarySearch(arr, ele));