function recurringCharacter (arr) {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return arr[i]
        }
        set.add(arr[i])
    }
    return undefined
} // O(n) - time complexity
// O(n)  - memory complexity

function recurringCharacter2 (arr) {
    const set = {}
    for (let i = 0; i < arr.length; i++) {
        if (set[arr[i]]) {
            return arr[i]
        }
        set[arr[i]] = true
    }
    return undefined
}

/**
 * @param {number[]} nums
 * @return {number}
 */



console.log(recurringCharacter([2,5,1,2,3]))
console.log(recurringCharacter([2,1,1,1,2,3]))
console.log(recurringCharacter([2,1,131]))

console.log(recurringCharacter2([2,5,1,2,3]))
console.log(recurringCharacter2([2,1,1,1,2,3]))
console.log(recurringCharacter2([2,1,131]))