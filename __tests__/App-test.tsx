/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import HomePage from '../src/screens/home/HomePage';
import {render} from '@testing-library/react-native';

let component: any;

describe('<HomePage />', () => {

  beforeEach(() => {
    //globalThis.fetch = jest.fn(() => Promise.resolve());
    component = render(<HomePage navigation={undefined as any} route={undefined as any} />);
  });
  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
  
});


