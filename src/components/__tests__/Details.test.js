import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithProvider from '../../utils/test/renderWithProvider';
import Details from '../Details';

describe('Details', () => {
  const close = jest.fn();
  const defaultStore = {
    details: {
      isOpen: true,
      close,
    },
    repositories: {
      getRepository: jest.fn(() => ({
        title: 'title',
        stars: 1,
        forks: 1,
        watchers: 1,
      })),
      languages: jest.fn(() => ([{ label: 'label', percent: 100 }])),
    },
  };

  it('matches snapshot', () => {
    const { asFragment } = renderWithProvider(<Details />, defaultStore);
    expect(asFragment()).toMatchSnapshot();
  });

  it('when isOpen is false', () => {
    const store = {
      ...defaultStore,
      details: {
        isOpen: false,
      },
    };

    const { asFragment } = renderWithProvider(<Details />, store);
    expect(asFragment()).toMatchSnapshot();
  });

  it('close', () => {
    const { getByTestId } = renderWithProvider(<Details />, defaultStore);
    fireEvent.click(getByTestId('close'));
    expect(close).toHaveBeenCalledTimes(1);
  });
});
