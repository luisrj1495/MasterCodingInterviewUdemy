class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor () {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek () {
        return this.first
    }

    enqueue (value) {
        const newNode = new Node(value)
        if (this.length) {
            this.last.next = newNode
            this.last = newNode
        } else {
            this.first = newNode
            this.last = this.first
        }
        this.length++
    }

    print () {
        let currentNode = this.first
        let counter = 0
        let arr = []

        while (counter != this.length) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
            counter++
        }

        return arr
    }

    dequeue () {
        if (!this.first) return null
        if (this.length == 0) {
            this.last = null
        } 
        let deletedNode = this.first
        this.first = this.first.next
        this.length--
        console.log(this)
        return deletedNode
    }
}

const newQueue = new Queue()
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)

console.log(newQueue.print())
console.log(newQueue.peek())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())

console.log(newQueue.print())
