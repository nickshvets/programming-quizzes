const solution = require('./find-minimum');

describe('Test based on problem description', () => {
    test('', () => {
        expect(solution([73, 74, 75, 71, 69, 72, 1, 73])).toEqual(1);
    });

    test('', () => {
        expect(solution([5, 2, 2, 4, 6])).toEqual(2);
    });
});