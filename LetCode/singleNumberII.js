/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    for (let i = 0; i < nums.length; i++) {
        if ( obj[nums[i]] == 1) return nums[i]
    }

};

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))