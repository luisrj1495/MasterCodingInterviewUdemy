class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor () {
        this.data = []
    }

    push (value) {
        this.data.push(value)
    }
    peek () {
        if (this.data.length) return this.data[0]
        return null
    }
    pop () {
        let first = this.data[0]
        let j = 1
        for (let i = 0; i < this.data.length - 1; i++) {
            this.data[i] = this.data[j]
            j++
        }
        this.data.pop()
        return first
    }
    empty () {
        return this.data.length ? false : true
    }

}

const queue = new Queue();

queue.push(1);
queue.push(2);  
console.log(queue.peek());  // returns 1
console.log(queue.pop());   // returns 1
console.log(queue.empty()); // returns false