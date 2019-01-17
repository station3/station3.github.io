import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import media from 'utils/media'
import { SIZES } from 'utils/config'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Spoqa Han Sans', sans-serif !important;
    box-sizing: border-box;
  }

  h1 {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }
  
  button {
    outline: none;
    background: none;
    border: none;
  }

  .Wrap {
    ${media.desk1600`
      padding: 0 80px;
    `}
    
    ${media.desk1400`
      padding: 0 80px;
    `}
    
    ${media.desk1200`
      padding: 0 80px;
    `}

    ${media.tabletB`
      padding: 0 60px;
    `}
    
    ${media.tablet`
      padding: 0 40px;
    `}
    
    ${media.mobile`
      padding: 0 20px;
    `}

    ${media.mobileS`
      padding: 0 15px;
    `}
  }

  .d__view {
    display: none;

    @media only screen and (min-width: ${SIZES.tabletB + 1}px) {
      display: block;
    }
  }

  .tb__view {
    display: none;
    
    ${media.tabletB`
      display: block;
    `}
  }

  .t__view {
    display: none;

    ${media.tablet`
      display: block;
    `}
  }

  .m__view {
    display: none;
    
    @media only screen and (max-width: ${SIZES.mobile}px) {
      display: block;
    }
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
         url('/static/fonts/SpoqaHanSansBold.woff2') format('woff2'),
         url('/static/fonts/SpoqaHanSansBold.woff') format('woff'),
         url('/static/fonts/SpoqaHanSansBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
         url('/static/fonts/SpoqaHanSansRegular.woff2') format('woff2'),
         url('/static/fonts/SpoqaHanSansRegular.woff') format('woff'),
         url('/static/fonts/SpoqaHanSansRegular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
         url('/static/fonts/SpoqaHanSansLight.woff2') format('woff2'),
         url('/static/fonts/SpoqaHanSansLight.woff') format('woff'),
         url('/static/fonts/SpoqaHanSansLight.ttf') format('truetype');
  }
`

export const Body = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;

  ${media.desk1600`
    padding-top: 80px;
  `}

  ${media.desk1400`
    padding-top: 80px;
  `}

  ${media.desk1200`
    padding-top: 80px;
  `}

  ${media.tabletB`
    padding-top: 100px;
  `}
  
  ${media.tablet`
    padding-top: 100px;
  `}
  
  ${media.mobile`
    padding-top: 50px;
  `}

  ${media.mobileS`
    padding-top: 50px;
  `}
`