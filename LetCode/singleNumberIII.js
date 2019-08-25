/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    const solve = []
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    for (let i = 0; i < nums.length; i++) {
        if ( obj[nums[i]] == 1) {
            solve.push(nums[i])
        }
    }
    return solve

};

console.log(singleNumber([1,2,1,3,2,5]))