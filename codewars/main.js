
const everyone = ['hi', 'my', 'teddy', 'nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'my') {
      console.log('found nemo');
    }
  }
}




const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('found nemo')
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    if(fish === 'nemo') {
      console.log('found nemo');
    }
  }
}
