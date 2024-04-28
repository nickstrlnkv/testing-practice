const {capitalize, reverseString, calculator, analyzeArray, caesarCipher} = require('./index')

test('bebra should be Bebra', () => {
    expect(capitalize('bebra')).toBe('Bebra');
});

test('asoka should be akosa', () => {
    expect(reverseString('asoka')).toBe('akosa');
});

test('2 + 2 should be 4', () => {
    expect(calculator.add(2, 2)).toEqual(4);
});

test('5 - 4 should be 1', () => {
    expect(calculator.substract(5, 4)).toEqual(1);
});

test('8 / 2 should be 4', () => {
    expect(calculator.divide(8, 2)).toEqual(4);
});

test('10 * 8 should be 80', () => {
    expect(calculator.multiply(10, 8)).toEqual(80);
});

test('[1,8,3,4,2,6] should be average: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('abcde should be bcdef', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef')
});

test('ABcde should be BCdef', () => {
    expect(caesarCipher('ABcde', 1)).toBe('BCdef')
});
