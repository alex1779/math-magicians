import renderer from 'react-test-renderer';
import React from 'react';
import ErrorPage from '../components/Errorpage';

test('Confirm that ErrorPage renders correctly', () => {
  const component = renderer.create(<ErrorPage />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
