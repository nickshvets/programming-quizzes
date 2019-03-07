
const solutionIterative = (arr, n) =>  {
    const dict = {};
    const final = [];
    for (el of arr) {
        if (!dict[el]) dict[el] = 0;
        if (dict[el] < n) {
            final.push(el);
            dict[el]++;
        }
    }
    return final;
};

const solutionFunctional = (arr, n) =>  {
    const dict = {};
    return arr.map(el => {
        if (!dict[el]) dict[el] = 0;
        if (dict[el] < n) {
            dict[el]++;
           return el;
        }
    }).filter(el => el);
};

const mySolutoin = (arr, n) =>  {
    
    const dict = {};
    const final = [];
    
    for (el of arr) {
        if (!dict[el]) dict[el] = 0;
        if (dict[el] < n) {
            final.push(el);
            dict[el]++;
        }
    }
    return final;
};

module.exports = mySolutoin;