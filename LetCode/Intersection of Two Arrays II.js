/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const set = new Set()
    const intersection = []
    for (let num1 of nums1) {
        set.add(num1)
    }
    for (let num2 of nums2) {
        if (set.has(num2)) {
            intersection.push(num2)
            set.delete(num2)
        }
    }
    return intersection
};

console.log(intersect([2,2], [1,2,2,1]))
console.log(intersect([4,9,5], [9,4,9,8,4]))
