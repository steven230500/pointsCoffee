/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import HomePage from '../src/screens/home/HomePage';
import {render} from '@testing-library/react-native';
import {StackScreenProps} from '@react-navigation/stack';

let component: any;

describe('<HomePage />', () => {

  beforeEach(() => {
    component = render(<HomePage navigation={undefined as any} route={undefined as any} />)
  });
  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});


