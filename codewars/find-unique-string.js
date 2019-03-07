function mySolutoin(arr) {
    const dict = new Map();  
    dict.set('a', 1);
    dict.set('b', 2);
    dict.set('c', 3);
    dict.set('d', 4);
    dict.set('e', 5);
    dict.set('f', 6);
    dict.set('g', 7);
    dict.set('h', 8);
    dict.set('i', 9);
    dict.set('j', 10);
    dict.set('k', 11);
    dict.set('l', 12);
    dict.set('m', 13);
    dict.set('n', 14);
    dict.set('o', 15);
    dict.set('p', 16);
    dict.set('q', 17);
    dict.set('r', 18);
    dict.set('s', 19);
    dict.set('t', 20);
    dict.set('u', 21);
    dict.set('v', 22);
    dict.set('w', 23);
    dict.set('x', 24);
    dict.set('y', 25);
    dict.set('z', 26);
    dict.set('A', 1);
    dict.set('B', 2);
    dict.set('C', 3);
    dict.set('D', 4);
    dict.set('E', 5);
    dict.set('F', 6);
    dict.set('G', 7);
    dict.set('H', 8);
    dict.set('I', 9);
    dict.set('J', 10);
    dict.set('K', 11);
    dict.set('L', 12);
    dict.set('M', 13);
    dict.set('N', 14);
    dict.set('O', 15);
    dict.set('P', 16);
    dict.set('Q', 17);
    dict.set('R', 18);
    dict.set('S', 19);
    dict.set('T', 20);
    dict.set('U', 21);
    dict.set('V', 22);
    dict.set('W', 23);
    dict.set('X', 24);
    dict.set('Y', 25);
    dict.set('Z', 26);
    dict.set(' ', 0);
    
    const numeric = arr.map((el, idx) => {
      const numberValues = el.split('').map(letter => dict.get(letter)); 
      const unique = [...new Set(numberValues)]; 
      const sum = unique.reduce((acc, el) => acc + el, 0);
      return [sum, el.length, idx];
    });
    
    
    for(let i = 0; i < numeric.length; i++) {
     if(numeric[i][0] != numeric[i+1][0]) {
       return arr[numeric[i+1][2]];
     }
    }
    
    console.log(numeric);
  
  }
  

  module.exports = mySolutoin;