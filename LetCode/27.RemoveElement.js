/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

  for (let i=0; i < nums.length; i++) {
      if (nums[i] == val) {
          nums.splice(i, 1)
          i = i - 1
      }
  }
  return nums.length
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
  let j = 0
    for (let i=0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i]
            j++
        }
    }
    console.log(nums)
    return j
  };
  

console.log(removeElement2([0,1,2,2,3,0,4,2],2))