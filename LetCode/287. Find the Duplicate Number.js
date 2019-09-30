/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums = nums.sort((a,b) => a-b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] == nums[i]) return nums[i]
    }

};

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
