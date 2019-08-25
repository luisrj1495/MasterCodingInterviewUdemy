/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set()
    nums = nums.sort((a,b) => a - b)
    if (nums[0] != 0) return 0
    let shouldNumber = nums[0] + 1
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(shouldNumber)) return shouldNumber
        shouldNumber += 1
    }
};

const findMin = arr => {
    let min = 10000000
   for (let n of arr) {
       if ( n < min) {
           min = n
       }
   }

   return min
}

var missingNumber2 = function(nums) {
    const set = new Set()
    let min = findMin(nums)
    if (min != 0) return 0
    let shouldNumber = min + 1
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(shouldNumber)) return shouldNumber
        shouldNumber += 1
    }
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0]))
console.log(missingNumber([1]))
console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))

console.log("****************************************")

console.log(missingNumber2([3,0,1]))
console.log(missingNumber2([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber2([0]))
console.log(missingNumber2([1]))
console.log(missingNumber2([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]))

