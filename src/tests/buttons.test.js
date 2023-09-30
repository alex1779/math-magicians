import { render, fireEvent } from '@testing-library/react';
import { ButtonGray, ButtonOrange, ButtonZero } from '../components/buttons';

describe('Check the button functionality', () => {
  test('- Button Gray with correct text created and function', () => {
    const string = '9';
    const clickCalc = jest.fn();

    const { getByText } = render(<ButtonGray string={string} clickCalc={clickCalc} />);

    const buttonElement = getByText(string);

    // Assert that the button contains the correct string
    expect(buttonElement).toBeInTheDocument();

    // Trigger a click event on the button
    fireEvent.click(buttonElement);

    // Verify that the clickCalc function was called with the correct string
    expect(clickCalc).toHaveBeenCalledWith(string);
  });

  test('- Button Orange with correct text created and function', () => {
    const string = '+';
    const clickCalc = jest.fn();

    const { getByText } = render(<ButtonOrange string={string} clickCalc={clickCalc} />);

    const buttonElement = getByText(string);

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(clickCalc).toHaveBeenCalledWith(string);
  });

  test('- Button Zero with correct text created and function', () => {
    const string = '0';
    const clickCalc = jest.fn();

    const { getByText } = render(<ButtonZero string={string} clickCalc={clickCalc} />);

    const buttonElement = getByText(string);

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(clickCalc).toHaveBeenCalledWith(string);
  });
});
