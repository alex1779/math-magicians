import React from 'react';
import { waitFor, render } from '@testing-library/react';
import Quotes from '../components/Quotes';

test('Confirm that Quotes renders correctly', async () => {
  const quote = {
    quote: 'Money is the root of all evil.',
    author: 'Mark Twain',
    categories: 'money',
  };
  const { container } = render(<Quotes quote={quote} />);
  console.log(`this is the container: ${container}`);

  await waitFor(() => {
    // Check that the li element is rendered
    const liElement = container.querySelector('li');
    console.log(`this is the li element: ${liElement}`);
    expect(liElement).toBeInTheDocument();
  });

  await waitFor(() => {
    expect(container).toMatchSnapshot();
  });
});
