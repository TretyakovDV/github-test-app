import React from 'react';
import { inject, observer } from 'mobx-react';
import renderWithProvider from '../renderWithProvider';

describe('renderWithProvider', () => {
  it('matches snapshot', () => {
    const Component = inject('test')(observer(({ test }) => <div data-testid="test">{test.label}</div>));

    const store = {
      test: {
        label: 'label',
      },
    };

    const { asFragment } = renderWithProvider(<Component />, store);
    expect(asFragment()).toMatchSnapshot();
  });

  it('passed store value', () => {
    const Component = inject('test')(observer(({ test }) => <div data-testid="test">{test.label}</div>));

    const store = {
      test: {
        label: 'label',
      },
    };

    const { getByTestId } = renderWithProvider(<Component />, store);
    expect(getByTestId('test')).toHaveTextContent('label');
  });
});
