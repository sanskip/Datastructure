const isPowerOfTwo = (number) => {
    let result = false;
    for (let i = 1; i <= 6; i++) {
      if (number === Math.pow(2, i)) {
        result = true;
      }
    }
    return result;
  };
  
  console.log(isPowerOfTwo(16));
  console.log(isPowerOfTwo(10));


  /* Method to check if x is power of 2*/
  function isPowerOfTwo (x)
  {
    /* First x in the below expression is
      for the case when x is 0 */
      return x!=0 && ((x&(x-1)) == 0);
       
  }
   
// Driver method
console.log(isPowerOfTwo(31));
console.log((isPowerOfTwo(64)));


