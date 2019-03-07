function order(words){
    const dict = new Map();
    
    const arr = words.split(' ');
    
    const getNum = (w) => {
      return parseInt(w.split('').filter(el => {
        if(parseInt(el)) {
          return el;
        }
      }).join());
    };
    
    for(let i = 0; i < arr.length; i++) {
      dict.set(getNum(arr[i]), arr[i])
    }
    
    
    let result = [];
    
    for (let i = 1; i <= arr.length; i++) {
      result.push(dict.get(i));
    }
    
    console.log(arr);
    console.log(arr[1]);
    console.log(getNum(arr[1]));
    
    console.log(result.join(' '));
    
    return result.join(' ');
    
  }