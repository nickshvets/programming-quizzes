const solution = require('./dividing-the-kingdom');

describe('Test based on problem description', () => {
    test('On input 5, 5, [0, 4, 2, 0], [0, 0, 1, 4] - should return 3', () => {
        expect(solution(5, 5, [0, 4, 2, 0], [0, 0, 1, 4])).toBe(3);
    });
});

describe('Random test', () => {
    test('On input 6, 6, [5, 5, 5, 3], [0, 1, 2, 3] - should return 1', () => {
        expect(solution(6, 6, [5, 5, 5, 3], [0, 1, 2, 3])).toBe(1);
    });
});