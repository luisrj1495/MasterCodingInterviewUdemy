/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const set = new Set();
  const arrMorseCode = [
      ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."
  ]
  let objMorseCode = {}
  let initAscii = 97
  let newWord = ''
  for (let letter of arrMorseCode) {
      objMorseCode[String.fromCharCode(initAscii)] = letter
      initAscii += 1
  }
  words.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      newWord += objMorseCode[word[i]]
    }
    set.add(newWord)
    newWord = ''
  })
  return set.size
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])