const findIndexOfMinimum = (numbers) => {
    let min = numbers[0];
    let index = 0;
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < min) {
       min = numbers[i];
       index = i;
      }
    }
    return index;
  }


const nexus = (users) => {
  const keys = Object.keys(users);
  const values = Object.values(users);
  
  const candidates = [];
  
  for (let i = 0; i < keys.length; i++) {
    candidates.push(Math.abs(keys[i] - values[i]));
  }
  
  let min = findIndexOfMinimum(candidates); 
  
  return parseInt(keys[min]);
}