var singleNumber = function(s) {
    const obj = {}
  for (let i= 0; i < s.length; i++) {
      obj[s[i]] = (obj[s[i]] || 0) + 1
  }
   for (let i= 0; i < s.length; i++) {
        if (obj[s[i]] == 1 ) return s[i]
   }
  
}

console.log(singleNumber([4,1,2,1,2]))