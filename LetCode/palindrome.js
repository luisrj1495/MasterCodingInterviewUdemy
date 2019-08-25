var isPalindrome = function(x) {
  /*
      steps
      - Convert number to string
      - Reverse a number
      -. Check if is equeal
      -. Return boolean - true is palindrome or false if is not
  */
  x = x.toString()
  let palindrome = '';
  for (let i = x.length - 1; i >= 0; i--) {
      palindrome += x[i] 
  }
  if (palindrome == x) {
      return true
  }
  return false
  
}; // Time complexity O(n) - Space Complexity O(n)

// console.log(isPalindrome(-121))

var isPalindrome2 = function(x) {
  /*
      steps
      - Iterate until x come lower than zero
      - Divide for ten every loop
      - Check if is equeal
      -. Return boolean - true is palindrome or false if is not
  */
 if (x < 0) {
   return false
 }
 let revertedNumber = 0;
 while(x > revertedNumber) {

     revertedNumber = revertedNumber * 10 + x % 10;
     x /= 10;
     console.log("****************")
     console.log(revertedNumber)
     console.log(x)
     console.log("****************")
 }
 

console.log(revertedNumber/10)

return x == revertedNumber || x == revertedNumber/10;
  
}; // Space Complexity O(1)

console.log(isPalindrome2(121))