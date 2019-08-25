class HashTable {
    constructor (size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set (key, value) {
        let hash = this._hash(key)
        // avoid collisions
        if (!this.data[hash]) {
            this.data[hash] = []
        } 
        this.data[hash].push([key, value])
        return this.data
        console.log(this.data)
    }

    get (key) {
        let hash = this._hash(key)
        const currentBucket = this.data[hash]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if ( currentBucket[i][0] === key) return currentBucket[i][1]
            }
        }
        return null
    }

    keys () {
        const keyArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keyArray.push(this.data[i][j][0])
                }
            }
        }
        return keyArray
    }
}

const hasTableTest = new HashTable(50)

hasTableTest.set('luis', 2)
hasTableTest.set('l', 2)
hasTableTest.set('la', 2)
hasTableTest.set('fl', 2)
console.log(hasTableTest.get('l'))
console.log(hasTableTest.keys())
