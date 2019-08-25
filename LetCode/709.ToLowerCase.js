/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let newWord = ''
  let code = 0
  for (let letter of str) {
      code = letter.charCodeAt()
      if (code >= 65 && code <= 90) {
          newWord += String.fromCharCode(code + 32)
      } else {
          newWord += letter
      }
  }
  return newWord
};