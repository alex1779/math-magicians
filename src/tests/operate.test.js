import operate from '../logic/operate';

const numberOne = 4;
const numberTwo = 2;

test('return the result of the sum of two numbers', () => {
  const operation = '+';
  expect(operate(numberOne, numberTwo, operation)).toEqual('6');
});

test('return the result of the subtraction of two numbers', () => {
  const operation = '-';
  expect(operate(numberOne, numberTwo, operation)).toEqual('2');
});

test('return the result of multiplication of two numbers', () => {
  const operation = 'x';
  expect(operate(numberOne, numberTwo, operation)).toEqual('8');
});

test('return the result of the division of two numbers', () => {
  const operation = '÷';
  expect(operate(numberOne, numberTwo, operation)).toEqual('2');
});
