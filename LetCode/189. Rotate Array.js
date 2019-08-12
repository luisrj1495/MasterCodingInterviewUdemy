/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let j = nums.length - 1
    while (k > 0) {
      nums.unshift(nums[j])
      nums.pop()
      k--
    }
    return nums
};

var rotate2 = function(nums, k) {
  let length = nums.length 
  let newArr = []
  if (length <= 1) {
    return nums
  }
  for (let i = length - k; i < length; i++) {
    newArr.push(nums[i])
  }
  for (let j = 0; j < length - k; j++) {
    newArr.push(nums[j])
  }

  for (let i = 0; i < length; i++) {
    nums[i] = newArr[i]
    
  }

    return nums
}

console.log(rotate2([1,2,3,4,5,6,7], 3))