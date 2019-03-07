function XO(str) {
    const filtered = str.toLowerCase().split('').filter(el => el === 'x' || el === 'o');
    
    const reduced = filtered.reduce((acc, el) => {
      if(el === 'x') {
        acc[0]++;
      } else {
        acc[1]++;
      }
      
      return acc;
    }, [0, 0])
    
    return reduced[0] === reduced[1];
}