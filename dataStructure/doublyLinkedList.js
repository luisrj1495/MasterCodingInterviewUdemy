class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor (value) {
        this.head = {
            value,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.length = 1
    }

    append (value) {
        const newNode = new Node(value)
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.previous = newNode
        this.head = newNode
        this.length++
        return this
    }

    traverseToIndex (index) {
        let currentNode = this.head
        let counter = 0
        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert (index,value) {
        const newNode = new Node(value)
        let leader = this.traverseToIndex(index - 1)
        let tmpNext = leader.next
        leader.next = newNode
        newNode.previous = leader
        newNode.next = tmpNext
        tmpNext.previous = newNode
        this.length++
        return this
    }

    remove (index) {
        let leader = this.traverseToIndex(index - 1)
        let tmp = leader.next
        leader.next = tmp.next
        tmp.previous = leader
        this.length--
        return this
    }

    printList () {
        let counter = 0
        let arr = []
        let currentNode = this.head
        while (counter != this.length) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
            counter++
        }
        return arr
    }
}

const newDoublyLinkedList = new DoublyLinkedList(10)
console.log(newDoublyLinkedList.append(5))
console.log(newDoublyLinkedList.append(11))
console.log(newDoublyLinkedList.append(13))
console.log(newDoublyLinkedList.printList())
console.log(newDoublyLinkedList.insert(2,43))
console.log(newDoublyLinkedList.printList())
console.log(newDoublyLinkedList.remove(1))
console.log(newDoublyLinkedList.printList())
