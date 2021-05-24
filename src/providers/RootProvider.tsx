import type { FC } from 'react';
import { RecoilRoot } from 'recoil';

import GlobalStyleProvider from './GlobalStyleProvider';

const RootProvider: FC = ({ children }) => (
  <RecoilRoot>
    <GlobalStyleProvider>
      {children}
    </GlobalStyleProvider>
  </RecoilRoot>
);

export default RootProvider;
