import { render } from '@testing-library/react';
import RootProvider from 'providers/RootProvider';
import App from './App';

test('renders without crashing', () => {
  render(<App />, { wrapper: RootProvider });
});
