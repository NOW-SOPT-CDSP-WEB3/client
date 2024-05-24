import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

${reset}

 a{
  text-decoration: none;
 }

 * {
  box-sizing: border-box;
 }

 html {
  /* 62.5% of 16px browser font size is 10px */
  /* 16px * 0.625 = 10px */
  font-size: 62.5%;
}

 button {
  cursor: pointer;
 }

 body {
  font-family: 'SpoqaHanSansNeoBold', sans-serif;
}

`;

export default GlobalStyle;
