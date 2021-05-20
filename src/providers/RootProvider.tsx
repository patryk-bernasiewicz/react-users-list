import type { FC } from 'react';
import GlobalStyleProvider from './GlobalStyleProvider';

const RootProvider: FC = ({ children }) => (
  <GlobalStyleProvider>
    {children}
  </GlobalStyleProvider>
);

export default RootProvider;
