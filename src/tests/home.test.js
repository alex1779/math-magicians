import renderer from 'react-test-renderer';
import React from 'react';
import Home from '../components/Home';

test('Home component snapshot', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
