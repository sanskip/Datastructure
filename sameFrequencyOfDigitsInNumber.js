// Check if the frequency of all the digits in a number is same
function isNumBalanced(N)
{
    var st = N;
    var isBalanced = true;
      
    // Frequency array to store
    // the frequencies of all
    // the digits of the number
    var freq = new Array(10);
    var i = 0;
    var n = st.length;
     
    for(i = 0; i < n; i++)
     
        // Store the frequency of
        // the current digit
        freq[st[i] - 0]++;
         
    for(i = 0; i < 9; i++)
    {
         
        // If freq[i] is not
        // equal to freq[i + 1] at
        // any index ‘i’ then set
        // isBalanced to false
        if (freq[i] != freq[i + 1])
            isBalanced = false;
    }
      
    // Return true if
    // the string is balanced
    if (isBalanced)
        return true;
    else
        return false;
}
 
// Driver code
var N = 1234567890;
 
// Function call
var flag = isNumBalanced(N);
 
if (flag)
    console.log("YES");
else
    console.log("NO");
 

 