/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomePage from '../src/screens/home/HomePage';

let component;

describe("<HomePage />", () => {
  beforeEach(() => {
    component = renderer.create(<HomePage />)
  })
  it
})

it('renders correctly', () => {
  renderer.create(<App />);
});
