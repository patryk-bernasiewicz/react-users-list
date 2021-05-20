import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    color: {
      white: string;
      turquoise: string;
      grayLight: string; // dadbdd
      gray: string; // dddddd
      grayDark: string; // 565656
      grayDarker: string; // 231f20
    }
  }
}
