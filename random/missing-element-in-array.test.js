const findMissing = require('./missing-element-in-array');

describe("Tests", () => {
    test('Simple test', () => {
        expect(findMissing([2, 1, 5, 9], [5, 2, 10, 9, 1])).toBe(10);
    }),

    test('Avoid overflowing for MAx_VALUE', () => {
        expect(findMissing([4, Number.MAX_VALUE, 5, 3], [Number.MAX_VALUE, 4, 12, 3, 5])).toBe(12);
    })
})