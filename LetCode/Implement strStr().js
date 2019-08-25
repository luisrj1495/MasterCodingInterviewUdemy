/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 const chunks = (j, size , word) => {
   let newWord = ''
   while (size) {
     newWord += word[j]
     j++
     size--
   }
   return newWord
 }
var strStr = function(haystack, needle) {
    if (!needle) return 0
    for (let i = 0; i < haystack.length; i++) {
      if (chunks(i, needle.length, haystack) == needle) {
        return i
      }
    }
    return -1
};

console.log(strStr('aaaa', 'bba'))