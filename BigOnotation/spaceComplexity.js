//#5 Space complexity O(1)
// Only we're adding one variable
function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}


// #6 Space complexity O(n)
// The number of inputs depends the new array
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)

// Exercise

// Find 1st, FInd Nth
const array = ['hi', 'my', 'teddy']

array[0] // O(1)
array[array.length - 1] // O(1)

// Compare its dates

const array = [
  {
    tweet: 'hi',
    date: 2012
  },   {
    tweet: 'my',
    date: 2014
  },  {
    tweet: 'teddy',
    date: 2019
  }]
//O(n²)

// ---------------- Exercise -------------

'asdsadsadsadasdas'.length // O(1) 
// --> because length in this language is a property of String so,
// when you create a string this property create this value