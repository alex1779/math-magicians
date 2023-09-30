import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from '../components/Calculator';

test('Confirm that the page renders correctly', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  console.log('erase this');
  expect(tree).toMatchSnapshot();
});

