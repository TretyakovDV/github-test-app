import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import renderWithProvider from '../../utils/test/renderWithProvider';
import Notification from '../Notification';

describe('Notification', () => {
  describe('with errors', () => {
    it('matches snapshot', async () => {
      const defaultStore = {
        error: {
          error: {
            message: 'message',
          },
        },
      };

      const { asFragment } = renderWithProvider(<Notification />, defaultStore);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('without errors', () => {
    it('matches snapshot', () => {
      const defaultStore = {
        error: {
          error: null,
        },
      };

      const { asFragment } = renderWithProvider(<Notification />, defaultStore);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
