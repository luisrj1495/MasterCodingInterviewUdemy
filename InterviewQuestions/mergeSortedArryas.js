/*
  mergeSortedArrays([0,3,4,31], [4,6,30])
  [0,3,4,4,6,30,31]

*/

function mergeSortedArrays(arr1, arr2) {
 let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
 let i = 0
 let j = 0
 let cont = 0
 const newArr = []
 while (cont < maxLength) {
  
     if (!arr2[j] || arr1[i] < arr2[j]) {
        newArr.push(arr1[i])
        i++
     } else {
      newArr.push(arr2[j])
      j++
     
   }
   cont = j > i ? j : i
 }
 return newArr
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))


function mergeSortedArrays2(arr1, arr2) {
  const mergeArray = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i = 1
  let j = 1

  // Check Input
  if (!arr1.length) return arr2
  if (!arr2.length) return arr1

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergeArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      mergeArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }


  return mergeArray

}