import calculate from '../logic/calculate';

describe('confirm functionality of: ', () => {
  let mockObj = {
    total: null,
    next: null,
    operation: null,
  };

  let buttonName = '';

  beforeEach(() => {
    mockObj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('Clearing the display when button AC is clicked', () => {
    buttonName = 'AC';

    expect(calculate(mockObj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Number is clicked and returns the updated object', () => {
    buttonName = '9';

    expect(calculate(mockObj, buttonName)).toEqual({
      next: '9',
      total: null,
    });
  });

  test('period button is clicked and next is empty', () => {
    buttonName = '.';

    expect(calculate(mockObj, buttonName)).toEqual({
      total: null,
      next: '0.',
      operation: null,
    });
  });

  test('equals is clicked and there is a next and an operation', () => {
    buttonName = '=';

    mockObj = {
      total: '5',
      next: '9',
      operation: '+',
    };

    expect(calculate(mockObj, buttonName)).toEqual({
      total: '14',
      next: null,
      operation: null,
    });
  });
});
