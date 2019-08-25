/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const objS = {}
  const objT = {}
  let length =  s.length
  if (s.length != t.length) return false
    for (let i = 0; i < length; i++) {
      objS[s[i]] = (objS[s[i]] || 0) + 1
      objT[t[i]] = (objT[t[i]] || 0) + 1
    }
  // console.log(objS, objT)
  for (let i = 0; i < length; i++) {
    // console.log(s[i],t[i],objT[s[i]], objS[t[i]] )
    if (objT[s[i]] != objS[s[i]] || objS[s[i]] == undefined || objT[s[i]] == undefined) {
      return false
    }
  }
  return true
    
};

console.log(isAnagram("a", "b"))
console.log(isAnagram("aacc", "ccac"))
console.log(isAnagram("anagram", "nagaram"))

