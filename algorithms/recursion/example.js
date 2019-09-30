
let counter = 0
function inception () {
    debugger
    if (counter == 2) return counter
    counter++
    console.log(counter)
    return inception()
}

console.log(inception())