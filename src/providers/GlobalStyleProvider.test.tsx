import { render } from '@testing-library/react';
import GlobalStyleProvider from './GlobalStyleProvider';

test('render without crashing', () => {
  render(<GlobalStyleProvider />);
});