import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import SpoqaHanSansNeoBold from '@/assets/fonts/SpoqaHanSansNeoBold.ttf';
import SpoqaHanSansNeoMedium from '@/assets/fonts/SpoqaHanSansNeoMedium.ttf';
import SpoqaHanSansNeoRegular from '@/assets/fonts/SpoqaHanSansNeoRegular.ttf';
import YouandiModernTR from '@/assets/fonts/YouandiModernTR.ttf';

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

@font-face {
    font-family: "YouandiModernTR";
    src: url(${YouandiModernTR});
}

@font-face {
    font-family: "SpoqaHanSansNeoRegular";
    src: url(${SpoqaHanSansNeoRegular});
}
@font-face {
    font-family: "SpoqaHanSansNeoMedium";
    src: url(${SpoqaHanSansNeoMedium});
}
@font-face {
    font-family: "SpoqaHanSansNeoBold";
    src: url(${SpoqaHanSansNeoBold});
}
`;

export default GlobalStyle;
