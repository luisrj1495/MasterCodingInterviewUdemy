/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }
    for (let i = 0; i < nums.length; i++) {
        if ( obj[nums[i]] > nums.length / 2) {
            return nums[i]
        }
    }
    
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
[1,1,1,2,2,2,2]
