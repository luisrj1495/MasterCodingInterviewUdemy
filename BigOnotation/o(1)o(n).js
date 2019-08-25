const nemo = ['nemo']

const large = new Array(5000).fill('nemo')

function findNemo(array) {
  let t0 = performance.now()
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('Found Neno')
    }
  }
  let t1 = performance.now()
  console.log(`Performance ${t1-t0} milliseconds`)
}

findNemo(nemo)
// console.log(large)
findNemo(large) //O(n) --> Linear Time 

const boxes = ['box1', 'box2', 'box3', 'box4']
const logFirstTwoBoxes = boxes => {
  console.log(boxes[0])
  console.log(boxes[1])
  // Really is O(2) but generally is O(1)
  // There are two operations
}

logFirstTwoBoxes(boxes) // O(1) --> Constant Time


//Exercise

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Big 0(3 + 4n) -> Big O(n)


// Exercise

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Rta/ Big O(4 + 7n) ----> O(n)

// -------- Exercise ---------

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}

// O(1 + n/2 + 100) ---> O(n)


// ---------- Exercise ----------->

function compress(boxesOne, boxesTwo) {
  boxesOne.forEach(console.log)
  boxesTwo.forEach(console.log)
}
// O(a + b)