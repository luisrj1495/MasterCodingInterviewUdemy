// 10 -> 5 -> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    printList () {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    traverseToIndex(index) {
        let currentNode = this.head
        let counter = 0
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
        } else {
            const newNode = new Node(value)
            const leader = this.traverseToIndex(index - 1)            
            newNode.next = leader.next
            leader.next = newNode
            this.length++
            return this
        }
    }

    remove (index) {
        if (index < this.length) {
            let leader = this.traverseToIndex(index - 1)
            let tmp = leader.next
            leader.next = tmp.next
            this.length--

            return this

        }
    }

    shift () {
        let nextNode = this.head.next
        this.head = nextNode
        this.length--
        return this
    }

    reverse () {
        if (!this.head.next) return this.head
        let first = this.head
        this.tail = this.head
        let counter = 0
        let second = first.next
        console.log("FIRST", first)
        console.log("Second",second)
        console.log("***********************")
        while (second) {
            console.log("**********Counter*************  ", counter)
            let tmp = second.next
            console.log("tmp", tmp)
            second.next = first
            console.log("Second", second)
            first = second
            console.log("FIRST", first)
            second = tmp
            console.log("Second",second)
            counter++
            console.log("***********************")

           
        }
        this.head.next = null
        this.head = first
        return this

    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(100)
myLinkedList.prepend(120)
console.log(myLinkedList.printList())
console.log(myLinkedList.insert(2,69))
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
console.log("********REVERSE************")
console.log(myLinkedList.reverse())

// console.log(myLinkedList.printList())




