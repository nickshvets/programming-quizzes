function findShort(s){
    const arr = s.split(" "); 
  
  return arr.reduce((minLength, el) => {
    if(el.length < minLength) {
      minLength = el.length;
    }
    return minLength;
  }, arr[0].length)
  
  //   for(let i = 0; i < arr.length; i++) {
  //     if(arr[i].length < minimum) {
  //       minimum = arr[i].length;
  //     }
  //   }
  //   return minimum;
  
  }