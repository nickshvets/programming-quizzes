const findMedianSortedArrays = require('./median-of-two-arrays');

describe('Test based on problem description', () => {
    test('On input [1, 3], [2] - should return 2', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    });

    test('On input [1, 2], [3, 4] - should return 2.5', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });
});