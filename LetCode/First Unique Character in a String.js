/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const obj = {}
  for (let i= 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1
  }
   for (let i= 0; i < s.length; i++) {
       if (obj[s[i]] == 1 ) {
           return i
       }
  
  }
  return -1
};

console.log(firstUniqChar("loveleetcode"))