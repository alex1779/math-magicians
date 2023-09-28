import operate from '../logic/operate.js';

const numberOne = 2;
const numberTwo = 4;
const operation = 'x';

test('return the result of multiplication of two numbers', () => {
    expect(operate(numberOne, numberTwo, operation)).toEqual('8')
})