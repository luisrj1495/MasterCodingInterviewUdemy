/*
  1. Reference type

    [] === [] -> false
    [] or {} is create a new box or element for that they are not equals
*/

const object1 = { value: 10 }
const object2 = object1
const object3 = { value: 10 }
console.log(object1 === object2) // true -> because is a reference because it isn't primitive type
console.log(object1 === object3) // false


/*

  2. Context vs scope
    - this can change depends of context or depends of brackets it is inside.


*/

function a() {
  //Context
  let a = 4
}

const obj = {
  a: function() {
    console.log(this)
  }
}

/*
  3. Instantiation
    To make instances or multiple copies of an object
    - extends is reserve word, always ypu have to call super method with the
    properties that inerts.

*/

class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }

  toString() {
    console.log(this)
    console.log(`${this.name}, type: ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type)
  }
  play() {
    console.log(this)
    console.log(`Hi !!${this.name}, type: ${this.type}`)
  }

}

const wizard1 = new Wizard('Shelly', 'Warrior')
const wizard2 = new Wizard('Elmo', 'Darker')
