import { render } from '@testing-library/react';
import RootProvider from './RootProvider';

test('render without crashing', () => {
  render(<RootProvider />);
});
