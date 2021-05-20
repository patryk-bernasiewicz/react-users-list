import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import type { FC } from 'react';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background-color: #fafafa;
  }
`;

const GlobalStyleProvider: FC = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default GlobalStyleProvider;
