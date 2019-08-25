
// Naive
function hasPairWithSum (arr, sum) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == sum) return true      
    }    
  }
  return false
}

// Better

function hasPairWithSum (arr, sum) {
  const mySet = new Set()
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true
    }
    mySet.add(sum - arr[i]) 
  }
  return false
}