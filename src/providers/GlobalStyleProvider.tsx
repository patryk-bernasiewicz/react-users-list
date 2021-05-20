import type { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const GlobalStyleProvider: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default GlobalStyleProvider;
