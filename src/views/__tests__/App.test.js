import React from 'react';
import renderWithProvider from '../../utils/test/renderWithProvider';
import App from '../App';

describe('App', () => {
  const defaultStore = {
    repositories: {
      getRepository: jest.fn(),
      removeRepository: jest.fn(),
      list: [
        {
          id: 1,
          title: 'title',
          stars: 1,
          url: 'url',
        },
      ],
      languages: jest.fn(),
    },
    details: {
      open: jest.fn(),
    },
    error: {},
  };

  describe('with repositories', () => {
    it('matches snapshot', () => {
      const { asFragment } = renderWithProvider(<App />, defaultStore);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('without repositories', () => {
    const store = {
      ...defaultStore,
      repositories: {
        ...defaultStore.repositories,
        list: jest.fn(() => ([])),
      },
    };

    it('matches snapshot', () => {
      const { asFragment } = renderWithProvider(<App />, store);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
