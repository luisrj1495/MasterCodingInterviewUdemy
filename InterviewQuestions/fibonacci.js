// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ //O(n)
    let val = 1
    let prevVal = 0
    let tmp = 0
    if (n == 0) return 0
    if (n == 1) return 1
    while(n > 1) {
        tmp = val
        val = val + prevVal
        prevVal = tmp
        n--
    }
    return val
    //code here;
  }
  console.log(fibonacciIterative(3));
  console.log(fibonacciIterative(9));

  function fibonacciIterative3(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1]);
    }
   return arr[n];
  }

  
  function fibonacciRecursive(n) { //O(2^n)
      if (n < 2) return n
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
  }
  
  console.log(fibonacciRecursive(3))
  console.log(fibonacciRecursive(9))
