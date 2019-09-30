// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if (number == 0) return 1
    return findFactorialRecursive(number-1) * number
  }
  
  function findFactorialIterative(number) {
    //code here
    let answer = 1
    for (let i = 1; i <= number; i++ ){
        answer *= i
    }
    return answer;
  }
  

  console.log(findFactorialRecursive(5))
  console.log(findFactorialIterative(5))
