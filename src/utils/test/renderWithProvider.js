import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';

const renderWithProvider = (component, store) => render(
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider {...store}>
    {component}
  </Provider>,
);

export default renderWithProvider;
