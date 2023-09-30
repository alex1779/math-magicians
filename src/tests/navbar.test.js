import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Navbar from '../components/Navbar';

test('Confirm that the navbar is displayed correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
