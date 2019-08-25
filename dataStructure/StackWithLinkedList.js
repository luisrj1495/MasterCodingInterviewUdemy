class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor () {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    push (value) {
        const newNode = new Node(value)
        if (this.length) {
            let tmpNode = this.top
            this.top = newNode
            this.top.next = tmpNode

        } else  {
            this.top = newNode
            this.bottom = newNode
        }
        this.length++
        return this
    }

    traverseIndex (index) {
        let currentNode = this.top
        let counter = 0
        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode

    }

    peek () {
        return this.top
    }

    pop () {
        if (!this.top) return null
        if ( this.length == 0) {
            this.bottom = null
        } 
        let deleteNode = this.top
        this.top = this.top.next
        this.length--
        return deleteNode 
    }

    printList () {
        let arr = []
        let currentNode = this.top
        let counter = 0
        while (counter != this.length) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
            counter++
        }

        return arr
    }

    isEmpty () {
        return this.length ? false : true
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

