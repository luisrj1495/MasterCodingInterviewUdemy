const a = 1000
const b = 8000
const c = [big array]
const a = 1000
const b = 8000
const c = [big array]
const a = 1000
const b = 8000
const c = [big array]
const a = 1000
const b = 8000
const c = [big array]
const a = 1000
const b = 8000
const c = [big array]
const a = 1000
const b = 8000
const c = [big array]

/*
    That globals variables created could be produce
    memory leak
*/


// Call Stack

// Example 1

const one = () => {
    const two = () => {
        console.log('4')
    }
    two()
}

/*
    Call stack example 1
    
    console.log('4')
    two()    
    one()
*/

// Example 2 - Asynchronous behavior

console.log(1)
setTimeout(() => {
    console.log(2)
},1000)
console.log(3)


/*
    Call stack example 2

    1.
    Timeout()
    CALL STACK

    WEB API

    CALLBACK QUEUE

    EVENT LOOP
    *********************

    2.

    CALL STACK

    Timeout() -> wait 1000
    WEB API

    CALLBACK QUEUE

    EVENT LOOP

    *********************************

    3.

    CALL STACK

    
    WEB API
        
        callback of Timeout()
    CALLBACK QUEUE

    EVENT LOOP
        Check if call stack is empty


     *********************************

    4.
        console.log(2)
        callback of Timeout()
    CALL STACK

    
    WEB API

    CALLBACK QUEUE

    EVENT LOOP
    
   
*/