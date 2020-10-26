import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
