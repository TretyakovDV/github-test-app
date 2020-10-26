import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RepositoryTableRow from '../RepositoryTableRow';

describe('RepositoryTableRow', () => {
  it('matches snapshot', () => {
    const id = 1;
    const title = 'title';
    const stars = 200;
    const url = 'url';

    const onDetails = jest.fn();
    const onDelete = jest.fn();

    const { asFragment } = render(
      <RepositoryTableRow
        id={id}
        title={title}
        stars={stars}
        url={url}
        onDetails={onDetails}
        onDelete={onDelete}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('onDetails()', () => {
    const id = 1;
    const title = 'title';
    const stars = 200;
    const url = 'url';

    const onDetails = jest.fn();
    const onDelete = jest.fn();

    const { getByTestId } = render(
      <RepositoryTableRow
        id={id}
        title={title}
        stars={stars}
        url={url}
        onDetails={onDetails}
        onDelete={onDelete}
      />,
    );

    fireEvent.click(getByTestId('details'));

    expect(onDetails).toHaveBeenCalledTimes(1);
  });

  it('onDelete()', () => {
    const id = 1;
    const title = 'title';
    const stars = 200;
    const url = 'url';

    const onDetails = jest.fn();
    const onDelete = jest.fn();

    const { getByTestId } = render(
      <RepositoryTableRow
        id={id}
        title={title}
        stars={stars}
        url={url}
        onDetails={onDetails}
        onDelete={onDelete}
      />,
    );

    fireEvent.click(getByTestId('delete'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
