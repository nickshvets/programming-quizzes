const solution = require('./delete-occurences');

describe('Test based on problem description', () => {
    test('', () => {
        expect(solution([1,1,1,1],2)).toEqual([1,1]);
    });

    test('', () => {
        expect(solution([20,37,20,21],1)).toEqual([20,37,21]);
    });
});

