// An array into an arraylike object 

const ArrayLike = function() {};
ArrayLike.prototype = [];


// instantiate new array like objects:

var cards = new ArrayLike();
cards.push('ace of spades', 'two of spades', 'three of spades');
console.log('cards**',cards,cards[0]);



// Second largest element in array !!
var secondMax = function (arr) {     
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

let arr = [20, 120, 111, 215, 54, 78]; // use int arrays
var max2 = secondMax(arr);
console.log(max2);


//Find second max using sort method 
let arr1 = [20,  111, 215, 54, 78];
arr1.sort();
console.log(arr1);
console.log(arr1[1]);



// Function to print the second largest elements
function print2largest(arr, arr_size) {
    let i;
    let largest = second = -2454635434;

    // There should be atleast two elements
    if (arr_size < 2) {
        document.write(" Invalid Input ");
        return;
    }

    // finding the largest element
     
    for (i = 0 ;i<arr_size;i++){
        if (arr[i]>largest){
            second = largest ;
            largest = arr[i]
        }

        else if (arr[i]!=largest && arr[i]>second ){
            second = arr[i];
        }
    }

    if (second == -2454635434){
         
    console.log("There is no second largest element<br>");
    }
    else{
        console.log("The second largest element is " + second);
            return;
        }
    }
 

// Driver program to test above function

let arr2= [ 12, 35, 1, 10, 34, 1 ];
let n = arr2.length;
print2largest(arr2, n);
 



// convert number to array digits
// const convertNumberToArray = ((no)={

// });
let str='567'
console.log(str.split(''))