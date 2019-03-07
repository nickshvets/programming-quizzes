const checkEven = (arr) => {
    let countEven = countOdd = 0;
    for(let i = 0; i < 3; i++) {
      if(arr[i] % 2 === 0) countEven++;
      else countOdd++;
    }
    return countEven > countOdd;
  };

const findOutlier = (integers) => checkEven(integers) ? 
    integers.filter(el => el % 2 !== 0)[0] : 
    integers.filter(el => el % 2 === 0)[0];

 

