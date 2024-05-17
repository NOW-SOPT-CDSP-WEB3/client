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
