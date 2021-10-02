
// Remove all even integers from an array
function removeEven(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0) // Check if the item in the list is NOT even ('%' is the modulus symbol!)
            odds.push(number) //If it isn't even append it to the empty list
    }
  return odds // Return the new list
}
console.log(removeEven([3, 2, 41, 3, 34]))

// Solution #2: Using filter() and lambda function
function removeEven1(arr) {
    return arr.filter((v => (v % 2) != 0))
}
console.log(removeEven1([3,2,41,3,34]))