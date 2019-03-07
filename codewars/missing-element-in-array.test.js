const findMissing = require('./missing-element-in-array');

describe("Tests", () => {
    test('Simple test', () => {
        // expect(findMissing([2, 1, 5, 9], [5, 2, 10, 9, 1])).toBe(10);
        expect(findMissing([1, 2, 21, 5, 10], [2, 5, 1, 10])).toBe(21);
    }),

    test('Avoid overflowing for MAX_VALUE', () => {
        expect(findMissing([1, Number.MAX_VALUE, 21, 5, 10], [Number.MAX_VALUE, 5, 1, 10])).toBe(21);
    })
})