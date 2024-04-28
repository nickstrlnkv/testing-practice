function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(value) {
    return value.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a+b,
    substract: (a, b) => a - b,
    divide: (a, b) => {
        if (b === 0)
            throw new Error('Cannot divide by zero!')
        return a / b;
    },
    multiply: (a, b) => a * b
}

function analyzeArray(array) {
    output = {}

    let sum = 0;
    array.forEach(element => {
        sum += element
    });
    
    output['average'] = sum / array.length;
    output['min'] = Math.min(...array);
    output['max'] = Math.max(...array);
    output['length'] = array.length;

    return output;
}

function caesarCipher(value, shift) {
    const alphabet = '.,?!abcdefghijklmnopqrstuvwxyz0123456789';
    let output = '';
    for (let i = 0; i < value.length; i++) {
        const char = value.charAt(i);
        const code = char.charCodeAt(char)
        output += String.fromCharCode(code+shift);
    }
    return output
}

module.exports = {capitalize, reverseString, calculator, analyzeArray, caesarCipher}