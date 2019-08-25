/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let length = nums.length
  let j = 0
  for (let i=0; i < length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i]
      j++
    }
  }
  for (let i = length - 1; i > j - 1; i--) {
    nums[i] = 0
  }
  return nums
};



console.log(moveZeroes([0,1,0,3,12]))