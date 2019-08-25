/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for (let num of nums) {
      set.add(num)
    }
    if (nums.length - set.size > 0) {
      return true
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))