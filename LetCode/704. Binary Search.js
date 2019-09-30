/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function (nums, target) {
    let min = 0
    let max = nums.length - 1
    let middle = Math.floor((nums.length - 1) / 2)
    while (min <= max) {

        if (nums[middle] == target) {
            return middle
        }
        if (target > nums[middle]) {
            min = middle + 1
        } else {
            max = middle - 1
        }
        middle = Math.floor((min + max) / 2)
    }

    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([2, 5], 2))
console.log(search([2, 5], 5))

console.log(search([-1, 0, 3, 5, 9, 12], 2))
console.log(search([5], 5))


