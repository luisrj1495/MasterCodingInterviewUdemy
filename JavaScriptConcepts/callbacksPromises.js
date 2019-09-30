
//sync
const sayName = (name, cb) => {
    console.log('runnn')

    console.log('name ', name)
    cb()
}

function callback() {
    console.log("This run at the end")
}

sayName('luis', callback)



console.log('first')
    setTimeout(() => {
        console.log("from callback")
    }, 3000)
console.log('end')