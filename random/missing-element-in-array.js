/**
 * Given two arrays which are identical except for 1 element which is present in one of the arrays but missing from the other -
 * we need to find the missing element. 
 */

/**
 * Method 1 - bad one
 * 
 * Difference between sum of elements in both arrays
 * 
 * NOTE: It will fail if any array contains Number.MAX_VALUE due to overflowing
 */
function findMissingUsingSum(arr1, arr2) {
    const sum = (el, acc) => (acc += el) && acc;
    return Math.abs(arr1.reduce(sum, 0) - arr2.reduce(sum, 0));
}

/**
 * Method 2 - using an additional map of elements
 * Disatvantage - larger space complexity
 */
function findMissingUsingMap(arr1, arr2) {
    const map = (arr1.length < arr2.length ? arr1 : arr2).reduce((acc, el) => (acc[el] = true) && acc, []);
    return (arr1.length > arr2.length ? arr1 : arr2).filter(el => !map[el])[0];
}

/**
 * Method 3 - using bitwise XOR
 * 
 * XOE all elements in array 1 starting with an initial value of 0,
 * same for array 2 and then XOR the results of both operations
 * 
 * This is the best solution
 */
const findMissingUsingXOR = (arr1, arr2) => {
    const xorEach = (acc, el) => (acc = acc ^ el) && acc;
    return arr1.reduce(xorEach, 0) ^ arr2.reduce(xorEach, 0)
}

module.exports = findMissingUsingXOR;