/**
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * Given a non-empty string containing only digits, determine the total number of ways to decode it.
 * Example 1:
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * Example 2:
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 * 
 * https://leetcode.com/problems/decode-ways/
 */
const numDecodings = (str) => {
    // cache in closure, for memoization
    const cache = [];

    // numDigits -> number of digits to process in the next step
    const numDecodingsInSubstring = (numDigits) => {
    
        // base case 1: empty string    
        if (numDigits == 0) return 1; 

        // base case 2: string starting with 0 
        const startIdx = str.length - numDigits;
        if (str[startIdx] == 0) return 0; 

        // return memoized result if we have it
        if(cache[numDigits]) return cache[numDigits]; 

        // decode 1 digit
        let result = numDecodingsInSubstring(numDigits - 1);    

        // decode 2 digits, if we have at least 2 digits in the remaining string 
        // and the index is a valid alphabet index 
        if (numDigits >= 2 && str.substring(startIdx, startIdx + 2) <= 26) {        
            result += numDecodingsInSubstring(numDigits - 2);
        }

        // memoize result before returning it
        cache[numDigits] = result; 
        return result;
    }
    return numDecodingsInSubstring(str.length);
};

module.exports = numDecodings;