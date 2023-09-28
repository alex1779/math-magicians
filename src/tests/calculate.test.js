import calculate from '../logic/calculate.js';

test('clear display when button is clicked', () => {
    const buttonName = 'AC';
    const objNull = {
        total: null,
        next: null,
        operation: null,
    }
    expect(calculate(objNull, buttonName)).toEqual({
        total: null,
        next: null,
        operation: null,})
})
