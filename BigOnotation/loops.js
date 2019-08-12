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

const findNemo2 = array => {
  array.forEach(fish => {
    if (fish === 'nemo') {
      console.log('Found Nemo')
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    console.log(fish)
      if (fish === 'nemo') {
        console.log('Found Nemo')
      }
  }
}

const findNemo4 = array => {
  for (let fish in array) {
    console.log(fish)
      // if (fish === 'nemo') {
      //   console.log('Found Nemo')
      // }
  }
}