import styled, { css } from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  width: 100%;
  padding-top: 50%;
  position: relative;

  ${media.desk1600`
    padding-top: 50%;
    min-height: 720px;
  `}
  
  ${media.desk1400`
    padding-top: 50%;
    min-height: 560px;
  `}
  
  ${media.desk1200`
    padding-top: 50%;
    min-height: 560px;
  `}
  
  ${media.tabletB`
    padding-top: 86.2832%;
    min-height: 780px;
  `}
  
  ${media.tablet`
    padding-top: 113.3721%;
    min-height: 780px;
  `}
  
  ${media.mobile`
    padding-top: 138.0597%;
    min-height: 412.5px;
  `}
  
  ${media.mobileS`
    padding-top: 137.931%;
    min-height: 400.35px;
  `}
`

export const Label = styled.h1`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;

  ${media.desk1600`
    font-size: 13px;
    line-height: 40px;
    letter-spacing: 2px;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: rotate(-90deg) translateX(-50%);
    transform-origin: top left;
  `}

  ${media.desk1400`
    font-size: 13px;
    line-height: 40px;
    letter-spacing: 2px;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: rotate(-90deg) translateX(-50%);
    transform-origin: top left;
  `}
  
  ${media.desk1200`
    font-size: 11px;
    line-height: 40px;
    letter-spacing: 1.7px;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: rotate(-90deg) translateX(-50%);
    transform-origin: top left;
  `}

  ${media.tabletB`
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.tablet`
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.mobile`
    margin-bottom: 2.5px;
    font-size: 9px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}

  ${media.mobileS`
    margin-bottom: 2px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
`

export const Table = styled.div`
  background: url('/static/images/service/banner/bg.svg') right center no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${media.desk1600`
    padding-left: 21.25%;
  `}
  
  ${media.desk1400`
    padding-left: 15.7143%;
  `}
  
  ${media.desk1200`
    padding-left: 15.7143%;
  `}
  
  ${media.tabletB`
    padding-top: 32.85%;
    padding-left: 60px;
  `}
  
  ${media.tablet`
    padding-top: 35.0291%;
    padding-left: 40px;
  `}
  
  ${media.mobile`
    padding-top: 54.6269%;
    padding-left: 30px;
  `}
  
  ${media.mobileS`
    padding-top: 56.0345%;
    padding-left: 20px;
  `}
`

export const TextWrap = styled.div`
  position: relative;
  > div {
    h1 {
      width: 100%;
    }
    h1, p {
      word-break: keep-all;
      color: #fff;
    }
  }

  ${media.desk1600`
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      h1 {
        max-width: 598px;
        margin-bottom: 40px;
        font-size: 50px;
        line-height: 70px;
        letter-spacing: -3px;
      }
      p {
        font-size: 16px;
        line-height: 30px;
      }
    }
  `}
  
  ${media.desk1400`
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      h1 {
        max-width: 478px;
        margin-bottom: 21px;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: -2.4px;
      }
      p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  `}
  
  ${media.desk1200`
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      h1 {
        max-width: 478px;
        margin-bottom: 21px;
        font-size: 40px;
        line-height: 60px;
        letter-spacing: -2.4px;
      }
      p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  `}
  
  ${media.tabletB`
    > div {
      h1 {
        max-width: 598px;
        margin-bottom: 60px;
        font-size: 50px;
        line-height: 75px;
        letter-spacing: -3px;
      }
      p {
        font-size: 24px;
        line-height: 40px;
      }
    }
  `}
  
  ${media.tablet`
    > div {
      h1 {
        max-width: 361px;
        margin-bottom: 60px;
        font-size: 50px;
        line-height: 75px;
        letter-spacing: -3px;
      }
      p {
        font-size: 24px;
        line-height: 40px;
      }
    }
  `}
  
  ${media.mobile`
    > div {
      h1 {
        max-width: 180.5px;
        margin-bottom: 30px;
        font-size: calc(50px / 2);
        line-height: calc(70px / 2);
        letter-spacing: -1.5px;
      }
      p {
        font-size: calc(24px / 2);
        line-height: calc(40px / 2);
      }
    }
  `}
  
  ${media.mobileS`
    > div {
      h1 {
        max-width: 162.5px;
        margin-bottom: 25px;
        font-size: calc(45px / 2);
        line-height: calc(65px / 2);
        letter-spacing: -1.35px;
      }
      p {
        font-size: calc(22px / 2);
        line-height: calc(35px / 2);
      }
    }
  `}
`
