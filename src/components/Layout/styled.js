import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import media from 'utils/media'
import { SIZES } from 'utils/config'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Spoqa Han Sans', sans-serif;
    * {
      box-sizing: border-box;
    }
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
`

export const Body = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;

  ${media.desk1600`
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
    max-width: 100%;
    padding-top: 50px;
  `}

  ${media.mobileS`
    max-width: 100%;
    padding-top: 50px;
  `}
`