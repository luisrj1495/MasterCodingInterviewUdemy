/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const arr = new Array(A.length)

    let lef = 0,
        right = A.length - 1,
        length = A.length - 1

    while (lef <= right) {
        if (Math.abs(A[lef]) > Math.abs(A[right])) {
            arr[length] = Math.pow(A[lef],2)
            lef++
        } else {
            arr[length] = Math.pow(A[right],2)
            right--
        }
        length--
    }

    return arr
};

console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))
console.log(sortedSquares([-7,-3,2,3,11,12]))
console.log(sortedSquares([1]))
console.log(sortedSquares([-2,0]))
console.log(sortedSquares([-1,2,2]))




