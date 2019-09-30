/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
        const intersectionMap = {}
        const intersectionArray = []
        for (let num of nums1) {
            intersectionMap[num] = true
        }
        for ( let num of nums2) {
            if (intersectionMap[num]) {
                intersectionArray.push(num)
                intersectionMap[num] = false
            }
        }
        return intersectionArray
        /*
            Time Complexity -> O(n)
            Space Complexity -> O(n)
        */
};

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))
