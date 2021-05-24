import { render } from '@testing-library/react';

import RootProvider from 'providers/RootProvider';
import { ErrorBoundary } from './ErrorBoundary';

describe('`ErrorBoundary` component', () => {
  it('displays error when thrown', () => {
    const Throws = () => {
      throw 'Error!';
    };

    // mock console.error out
    console.error = jest.fn();

    const { getByText } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>,
      { wrapper: RootProvider },
    );

    getByText('Oops!');
    getByText('Error!');
  });

  it('renders children component when error is not thrown', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test!</div>
      </ErrorBoundary>,
      { wrapper: RootProvider },
    );

    getByText('Test!');
  });
});
