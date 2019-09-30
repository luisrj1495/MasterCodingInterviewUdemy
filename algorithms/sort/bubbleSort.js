const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    let tmp;

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j-1] > array[j]) {
                tmp = array[j-1]
                array[j-1] = array[j]
                array[j] = tmp
            }
        }

    }
    return array
}

bubbleSort(numbers);
console.log(numbers)