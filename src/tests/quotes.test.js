import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import Quotes from '../components/Quotes';
import handlers from './mocks';

const server = setupServer(...handlers); // Create a server with your handlers

beforeAll(() => server.listen()); // Start the server before running tests
afterEach(() => server.resetHandlers()); // Reset request handlers between tests
afterAll(() => server.close()); // Close the server after all tests

test('Confirm that Quotes renders correctly', async () => {
  const { container } = render(<Quotes />);

  await waitFor(() => {
    // Check that the li element is rendered
    const liElement = container.querySelector('li');
    expect(liElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
