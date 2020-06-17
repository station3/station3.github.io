import { css } from 'styled-components'
// import { keys } from 'lodash'
import { SIZES } from './config'

// const media = keys(SIZES).reduce((result, label) => {
//   let style = (...args) => css`
//     @media only screen and (max-width: ${SIZES[label]}px) {
//       ${css(...args)}
//     }
//   `

//   if (label === 'desk1600') {
//     style = (...args) => css`
//       @media only screen and (min-width: ${SIZES[label]}px) {
//         ${css(...args)}
//       }
//     `
//   }

//   result[label] = style

//   return result
// }, {})



const media = {
  // ~ 1600
  desk1600: (...args) => css`
    @media only screen and (min-width: ${SIZES.desk1600}px) {
      ${css(...args)}
    }
  `,

  // 1599 ~ 1280
  desk1200: (...args) => css`
    @media only screen
      and (max-width: ${SIZES.desk1600 - 1}px)
      and (min-width: ${SIZES.desk1200}px) {
      ${css(...args)}
    }
  `,

  // 1279 ~ 769
  tabletB: (...args) => css`
    @media only screen
      and (max-width: ${SIZES.desk1200 - 1}px)
      and (min-width: ${SIZES.tablet + 1}px) { 
      ${css(...args)}
    }
  `,
  
  // 768 ~ 577
  tablet: (...args) => css`
    @media only screen
      and (max-width: ${SIZES.tablet}px)
      and (min-width: ${SIZES.mobile + 1}px) {
      ${css(...args)}
    }
  `,
  
  // 576 ~ 321
  mobile: (...args) => css`
    @media only screen
      and (max-width: ${SIZES.mobile}px)
      and (min-width: ${SIZES.mobileS + 1}px) {
      ${css(...args)}
    }
  `,
  
  // 320 ~
  mobileS: (...args) => css`
    @media only screen and (max-width: ${SIZES.mobileS}px) {
      ${css(...args)}
    }
  `
}

export default media