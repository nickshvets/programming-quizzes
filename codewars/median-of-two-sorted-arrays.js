/***
 * Median of Two Sorted Arrays
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)). You may assume nums1 and nums2 cannot be both empty. 
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
*/
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const div = parseInt((m + n) / 2);
    const rem = (m + n) % 2;
    const medIdx = rem == 0 ? [div, div + 1] : [div];
    const mergedSize = medIdx[1] ? medIdx[1] : medIdx[0];
    let merged = []
    for (let i = 0; i < mergedSize + 1; i++) {
        const n1 = nums1[0] === undefined ? Number.POSITIVE_INFINITY : nums1[0];
        const n2 = nums2[0] === undefined ? Number.POSITIVE_INFINITY : nums2[0];
        merged.push(n1 < n2 ? nums1.shift() : nums2.shift());
    }
    return medIdx[1] ? (merged[medIdx[0] - 1] + merged[medIdx[1] - 1]) / 2 : merged[medIdx[0]];
};

module.exports = findMedianSortedArrays;