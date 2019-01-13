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
const numDecodingsInSubstring = (str, k, cache) => {

    // base case 1: empty string    
    if (k == 0) return 1; 

    // base case 2: string starting with 0 
    const s = str.length - k;
    if (str[s] == 0) return 0;    

    if(cache[k]) return cache[k]; // return memoized result if we have it

    // decode 1 digit
    let result = numDecodingsInSubstring(str, k - 1, cache);    

    // decode 2 digits
    // if we have at least 2 digits in the remaining string
    if (k >= 2 && str.substring(s, s + 2) <= 26) {        
        result += numDecodingsInSubstring(str, k - 2, cache);
    }
    cache[k] = result; // memoize result before returning it
    return result;
}

const numDecodings = (s) => {
    const cache = [];
    return numDecodingsInSubstring(s, s.length, cache);
};

module.exports = numDecodings;