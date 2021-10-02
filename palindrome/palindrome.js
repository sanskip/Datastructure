class Palindrome{
    constructor(){

    }

    palindromeMethod1(value){
        if (!value){
            console.log('Value is undefined !!');
            return ;
        }
        if(value && value==this.reverseValue(value)){
            console.log(`${value}  is a palindrome !!`);
            return ;
        }
        console.log(`${value}  is not a palindrome !!`);
    }

    reverseValue(value){
        return value.split("").reverse().join("");
    }
    // program to check if the string is palindrome or not
// Example 1: Check Palindrome Using for Loop with less complexity
 checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


}

const palindrome = new Palindrome();
palindrome.palindromeMethod1('121');
palindrome.palindromeMethod1('dad');
palindrome.palindromeMethod1('dab');
palindrome.palindromeMethod1();
// call the function
const value = checkPalindrome(string);

console.log(value);