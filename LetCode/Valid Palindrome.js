/**
 * @param {string} s
 * @return {boolean}
 */

const reverseWord = word => {
  let newWord = ''
  for (let i = word.length - 1; i >= 0 ; i--) {
      newWord += word[i]
  }
  return newWord
}

const removeCharts = word => word.split(/\W+/).join('')

var isPalindrome = function(s) {
  s = removeCharts(s.toLocaleLowerCase())
  if (s == reverseWord(s)) return true
  return false

};

console.log(isPalindrome("race a car"))