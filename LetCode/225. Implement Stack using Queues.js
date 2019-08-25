class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class MyStack {
    constructor () {
        this.first = null
        this.last = null
        this.length = 0
    }

    push (value) {
        const newNode = new Node(value)
        if (this.length) {
            newNode.next = this.first
            this.first = newNode
        } else {
            this.first = newNode
            this.last = this.first
        }
        this.length++
    }

    pop () {
        if (this.length == 0) {
            this.last = null
        }
        let oldNode = this.first
        this.first = this.first.next
        this.length--
        return oldNode.value
    }
    
    top () {
        if (this.length) return this.first.value
        return null
    }

    empty () {
        return this.length ? false : true
    }
}

const stack = new MyStack();

stack.push(1);
stack.push(2);  
console.log(stack.top())
   // returns 2
   console.log(stack.pop());
   
   // returns 2
   console.log(stack.empty());
   
 // returns false