import React from 'react';
import { render } from '@testing-library/react';
import RepositoryTableRow from '../RepositoryListItem';

describe('RepositoryListItem', () => {
  it('matches snapshot', () => {
    const title = 'title';
    const stars = 200;
    const url = 'url';

    const { asFragment } = render(<RepositoryTableRow title={title} stars={stars} url={url} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
