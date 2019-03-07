const solution = require('./find-unique-string');

describe('Test based on problem description', () => {
    test('', () => {
        expect(solution([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])).toEqual('BbBb');
    });
});

