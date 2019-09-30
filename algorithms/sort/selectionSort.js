const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let indexSmallest = 0
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i]
      for (let j = i + 1; j < array.length; j++) {
        if (smallest > array[j]) {
            smallest = array[j]
            indexSmallest = j
        }
      }
      let tmp = array[i]
      array[i] = smallest
      array[indexSmallest] = tmp
  }
}

selectionSort(numbers);
console.log(numbers)