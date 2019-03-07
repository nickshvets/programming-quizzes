let array = [2, 1, 3, 2, 5, 1, 5];

function firstOccCharacter(arr) {
  let dict = {};
  for(i = 0; i < arr.length; i++) {
    if(dict[arr[i]]) {
      return arr[i];
    } else {
      dict[arr[i]] = true;
    }
  }
}

console.log(firstOccCharacter(array));



let array = [-4, -2, 1, 2, 0, 3, 10];

function toSquare(arr) {
  let temp = [];
  for(i = 0; i < arr.length; i++) {
    let powResult = arr[i] * arr[i];
    if (temp[powResult]) {
      if (Array.isArray(temp[powResult])) {
        temp[powResult].push(powResult);
      } else {
        temp[powResult] = [temp[powResult], powResult]
      }
    } else {
      temp[powResult] = powResult;
    }
  }

  // function myFIlter(arr) {
  //   arr = arr.filter(isAlright);
  //   return arr;
  // }

  // function isAlright(value) {
  //   if(value) {
  //     return value;
  //   }
  // }

//  return myFIlter(temp);

// return temp.filter(function(el){
//   if (el) {
//       return true
//   } else {
//     return false;  
//   }
// });

// return temp.filter(function(el){
//   return el ? true : false;
// });

// return temp.filter(function(el){
//   return el;
// });

return temp.filter(el => '0' || el);
}

console.log(toSquare(array));


//numerele negative, mai mici decat litera, mai mici decat numarul,