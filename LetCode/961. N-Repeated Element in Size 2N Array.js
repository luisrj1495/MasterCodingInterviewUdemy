/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A = A.sort((a,b) => a>b)
    let cont = 0
    let max = -111111
    let number = 0
    for (let i = 1; i < A.length; i++) {
      if (A[i] == A[i-1] && cont < A.length / 2 ) {
        cont += 1
        number = A[i]

      } else {
        if ( cont > max) {
          max = cont
        }
        cont = 0
      }
    }
    return number

};

console.log(repeatedNTimes( [1,2,3,3]))