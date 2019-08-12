/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]')
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr2 = function(address) {
  let newDir = ''
  for (let i = 0; i < address.length; i++) {
    if (address[i] == '.') {
      newDir = newDir + '[.]'
    } else {
      newDir += address[i]
    }
    
  }
  return newDir
};

console.log(defangIPaddr2("1.1.1.1"))