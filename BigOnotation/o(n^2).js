// log all pairs of array --> 11, 12, 13, 14, 15
const boxes = [1,2,3,4,5,6]

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i],array[j])
    }
  }
}

// O(n * n) ---> O(n²)

// ------- Example -------

function compress(boxesOne, boxesTwo) {
  boxesOne.forEach(box1 => {
    boxesTwo.forEach(box2 => {
      console.log(box1, box2)
    })
  })
}
// O(a * b)


// ---------- Example -----------

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

// O(n + n² ) -> O(n²)