import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RouterNav from '../components/Router';

test('Confirm that navigation to Calculator is correct', () => {
  render(<RouterNav />);

  const calculatorLink = screen.getByText('Calculator');
  userEvent.click(calculatorLink);

  const calculatorComponent = screen.getByText("Let's do some math!");
  expect(calculatorComponent).toBeInTheDocument();
});
