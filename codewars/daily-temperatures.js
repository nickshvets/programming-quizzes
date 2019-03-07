var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for(let i=0; i<temperatures.length; i++){
    	while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
            let j = stack.pop();
    		res[j] = i-j;
    	}
    	stack.push(i);
    }
    return res;
};

module.exports = dailyTemperatures;