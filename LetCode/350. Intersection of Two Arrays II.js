/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const objIntersect = {}
    const arrIntersect = []
    for (let num of nums1) {
        objIntersect[num] = (objIntersect[num] || 0) + 1 
    }
    for (let num of nums2) {
        if (objIntersect[num]) {
            arrIntersect.push(num)
            objIntersect[num] = objIntersect[num] - 1 
        }
    }

    return arrIntersect

    /*
        Time complexity -> O(n)
        Memory complexity -> O(n)

    */
};

console.log(intersect([1,2,2,1], [2,2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))
