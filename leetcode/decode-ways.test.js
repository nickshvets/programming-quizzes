const numDecodings = require('./decode-ways');

describe('Test base cases', () => {

    test('On empty string should return 1', () => {
        expect(numDecodings("")).toBe(1);
    });
    
    test('On string starting with 0 should return 0', () => {
        expect(numDecodings("0123")).toBe(0);
    });
});

describe("Test recursive cases", () => {

    test("String length 1", () => {
        expect(numDecodings("9")).toBe(1);
    });

    test("Random string", () => {
        expect(numDecodings("1211")).toBe(5);
    });
});