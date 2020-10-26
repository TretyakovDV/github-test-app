import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddRepositoryForm from '../AddRepositoryForm';

describe('AddRepositoryForm', () => {
  it('matches snapshot', () => {
    const onSubmit = jest.fn();

    const { asFragment } = render(<AddRepositoryForm onSubmit={onSubmit} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('onSubmit()', () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(<AddRepositoryForm onSubmit={onSubmit} />);
    fireEvent.change(getByPlaceholderText('facebook/react'), 'facebook/react');
    fireEvent.click(getByText('Add'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith('facebook/react');
  });
});
