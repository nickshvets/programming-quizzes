const solution = require('./remove-the-minimum');

describe('Test based on problem description', () => {
    test('', () => {
        expect(solution([73, 74, 75, 71, 69, 72, 1, 73])).toEqual([73, 74, 75, 71, 69, 72, 73]);
    });

    test('', () => {
        expect(solution([5, 2, 2, 4, 6])).toEqual([5, 2, 4, 6]);
    });
});