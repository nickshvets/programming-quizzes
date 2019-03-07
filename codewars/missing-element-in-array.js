
const findMissingElementUsingFor = (arr1, arr2) => {
    const longest = arr1.length > arr2.length ? arr1 : arr2;
    const smallest = arr1.length < arr2.length ? arr1 : arr2;
    const dictionary = new Map();
    for (let el of smallest) {
        dictionary.set(el, true);
    }
    for (let el of longest) {
        if (!dictionary.get(el)) {
        return el  
        }
    }
}


const findMissingElement = (arr1, arr2) => {
    const longest = arr1.length > arr2.length ? arr1 : arr2;
    const smallest = arr1.length < arr2.length ? arr1 : arr2;
    const dictionary = smallest.reduce((acc, el) => {
        acc.set(el, true);
        return acc;
    }, new Map());

    return longest.filter(el => !dictionary.get(el))[0];
}

//Optimized, unreadable
const missingNumber = (arr1, arr2) => {
    const dictionary = (arr1.length < arr2.length ? arr1 : arr2).reduce((acc, el) =>  acc.set(el, true) && acc, new Map());
    return (arr1.length > arr2.length ? arr1 : arr2).filter(el => !dictionary.get(el))[0];
  }

module.exports = findMissingElement;



array1 = [2, 3, 5, 1, 6, 7]
array2 = [2, 3, 5, 6, 7]

function findMissingElement(arr1, arr2) {
  let dict = {}
  let longest = arr1.length > arr2.length ? arr1 : arr2;
  let smallest = arr1.length < arr2.length ? arr1 : arr2;

  for(let element of smallest) {
    dict[element] = true;
  }

  for(let element of longest) {
    if(!dict[element]) {
      return element;
    }
  }
}

console.log(findMissingElement(array1, array2));