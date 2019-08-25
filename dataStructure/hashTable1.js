const user = {
    age: 54,
    name: 'Luis',
    magic: true,
    scream: function () {
        console.log('ahhhhh!!!!')
    }
}

user.age // O(1)
user.spell = 'abra kadabra' // 0(1)
user.scream() // 0(1)
delete user.spell
