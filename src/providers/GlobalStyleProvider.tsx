import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import type { FC } from 'react';

import appTheme from 'theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  html * {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.grayDarker};
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    width: 100%;
    max-width: 400px;
  }
`;

const GlobalStyleProvider: FC = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalStyleProvider;
