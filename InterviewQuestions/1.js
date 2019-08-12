// Given 2 arrays, create a function that
// let's a user know (true/false) whether
// these two arrays contain any common items
/*
  Example:
  const array1 = ['a','b','c','x']
  const array2 = ['z','y','i']
  should return false.
  Example:
  const array1 = ['a','b','c','x']
  const array2 = ['z','y','x']
  should return true.

  -Two parameters - arrays - no size limit
  -return true or false.
*/

const array1 = ['a','b','c','x']
const array2 = ['z','y','tt']

// ****************** First Approach -- O(a * b) *********************

// Force brute approach - O(a * b)
function containsCommonItemFB (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

console.log(containsCommonItemFB(array1, array2))
// Time complexity = O(a * b)
// Space complexity = O(1)

// ****************** Second Approach -- O(a + b) *********************


// If we want to reduce time complexity when we have nested loops
// we can use hash table or on JavaScript are Objects

/*
  array1 ==> obj {
    a: true,
    b: true,
    c: true
  }

  Then, compare the another array with its values
  array2[index] === obj.properties
*/

function containsCommonItem2 (arr1, arr2) { // O(a + b) - Time COmplexity
  /*
    ******** Steps before coding ******
    1. Loop through first array and create object,
      where properties === item in the array.
    2. Loop through second array and check if item
      in second array exists on created object.
    3. Generate possible errors
    4. Can we assume always 2 params?
  */
  const obj = {}
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      return true
    }
  }
  return false
}

console.log(containsCommonItem2(array1, array2))
// Time complexity = O(a + b)
// Space complexity = O(a)

// ****************** Third Approach -- O(a + b) *********************
// Clean code

function containsCommonItem3 (arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}