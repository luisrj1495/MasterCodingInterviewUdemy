
console.log(hi)
console.log(fun)
sayName()

var hi = 'Hello'

var fun = () => {
    console.log('1')
}

//This works well because move all function to the top
function sayName () {
    console.log('Hellow worlld')
}


// Process
// 1.Compiler declare the variable
var hi;

// 2. Compiler assign the value

hi = 'Hello'