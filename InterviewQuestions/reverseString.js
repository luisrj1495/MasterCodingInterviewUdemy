function reverse(str) {
  return str.split('').reverse().join('')
}

function reverse2(str) {
  /*
    - check input

  */

  if (!str || str.length < 2 || typeof(str) != 'string') return 'Thats no good'
  const backwards = []
  const length = str.length - 1

  for (let i = length; i >= 0; i--) {
    backwards.push(str[i])
    
  }
  return backwards.join('')
}

function reverse3(str) {

  let tmp = ''
  let left = 0
  let right = str.length - 1
  while (left < right) {
    tmp = str[left]
    str[left] = str[right]
    str[right] = tmp
    left++
    right--
  }

 
  return str
}

console.log(reverse3(["H","o","l","a","s","o","c","i","o"]))

function reverse4(str) {
  const vocals = 'aeiou'
  const strArr = []
  for (let letter of str) {
    strArr.push(letter)
  }
  let tmp = ''
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (vocals.includes(strArr[left]) && vocals.includes(strArr[right])) {
      tmp = strArr[left]
      strArr[left] = strArr[right]
      str[right] = tmp
      console.log(strArr[left])
      console.log(str[right])
      console.log(tmp)
    }
    left++
    right--
  }

 
  return strArr.join('')
}

console.log(reverse4("hello"))
