class Stack {
    constructor () {
        this.data = []
    }

    push (value) {
        this.data.push(value)
    }

    pop () {
        return this.data.pop()
    }

    isEmpty () {
        return this.data.length ? false : true
    }

    peek () {
        return this.data[this.data.length - 1]
    }

    printList () {
        return this.data
    }
}

const newStack = new Stack()
newStack.push('Google')
newStack.push('Udemy')
newStack.push('Discord')
console.log(newStack.peek())
console.log(newStack.printList())
newStack.pop()
newStack.pop()
console.log(newStack.pop())


console.log(newStack.printList())
