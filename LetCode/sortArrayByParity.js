/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
        const even = []
        const odd = []
        const total = []
        for (let num of A) {
            if (num % 2 == 0) {
                even.push(num)
            } else {
                odd.push(num)
            }
        }
        for (let e of even) {
            total.push(e)
        }
        for (let o of odd) {
            total.push(o)
        }
        return total
};

console.log(sortArrayByParity([3,1,2,4]))