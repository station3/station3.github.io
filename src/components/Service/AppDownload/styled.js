import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  width: 100%;
  
  ${media.desk1600`
    display: flex;
    padding: 88px 55px 36px;
  `}
  
  ${media.desk1200`
    display: flex;
    padding: 80px 49.2px 29px 49px;
  `}
`

export const AppImg = styled.div`
  flex: none;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 79.8718%;
    background: url(${withPrefix('/images/service/app_download/app_img.jpg')}) center center no-repeat;
    background-size: cover;
  }

  ${media.desk1600`
    width: 58.647%;
    &::after {
      padding-top: 79.8718%;
    }
  `}
  
  ${media.desk1200`
    width: 61.068%;
    &::after {
      padding-top: 79.81%;
    }
  `}
  
  ${media.tabletB`
    width: 100%;
    padding: 0 41px;
    padding-top: 100px;
  `}
  
  ${media.tablet`
    width: 100%;
    padding: 0 15px;
    padding-top: 100px;
  `}
  
  ${media.mobile`
    width: 100%;
    padding: 0 3px;
    padding-top: 50px;
  `}
  
  ${media.mobileS`
    width: 100%;
    padding: 0 2px;
    padding-top: 40px;
  `}
`

export const TextWrap = styled.div`
  display: flex;
  align-items: center;

  > div {
    font-size: 0;
    > h1 {
      margin-bottom: 0.5em;
      color: #000;
      font-weight: 400;
      line-height: 1.5em;
    }

    > a {
      margin-bottom: 2.22em;
      display: inline-block;
      color: #000;
      font-weight: 700;
      line-height: 2.77em;
      text-decoration: underline;
      position: relative;

      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: blue;
        position: absolute;
        right: -18px;
        top: 6px;
      }
    }
  }

  ${media.desk1600`
    flex: 1;
    padding-left: 40px;
    padding-bottom: 60px;

    > div {
      > h1 {
        font-size: 40px;
        letter-spacing: -2.4px;
      }

      > a {
        font-size: 13px;

        &::after {
          width: 7px;
          height: 7px;
          right: -13px;
          top: 9px;
        }
      }
    }
  `}
  
  ${media.desk1200`
    flex: 1;
    padding-left: 32.8px;

    > div {
      > h1 {
        font-size: 32px;
        letter-spacing: -2px;
      }

      > a {
        font-size: 10px;

        &::after {
          width: 6px;
          height: 6px;
          right: -10px;
          top: 6px;
        }
      }
    }
  `}
  
  ${media.tabletB`
    flex: none;
    padding-left: 20px;
    padding-bottom: 100px;

    > div {
      width: 100%;

      > h1 {
        margin-bottom: 30px;
        font-size: 46px;
        line-height: 1.63;
        letter-spacing: -2.8px;
      }

      > a {
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 2em;

        &::after {
          width: 12px;
          height: 12px;
          right: -22px;
          top: 6px;
        }
      }
    }
  `}
  
  ${media.tablet`
    flex: none;
    padding-left: 30px;
    padding-bottom: 100px;

    > div {
      width: 100%;

      > h1 {
        margin-bottom: 30px;
        font-size: 46px;
        line-height: 1.63;
        letter-spacing: -2.8px;
      }

      > a {
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 2em;

        &::after {
          width: 12px;
          height: 12px;
          right: -22px;
          top: 6px;
        }
      }
    }
  `}
  
  ${media.mobile`
    flex: none;
    padding-left: 10px;
    padding-bottom: 50px;

    > div {
      width: 100%;

      > h1 {
        margin-bottom: 15px;
        font-size: 23px;
        line-height: 1.63;
        letter-spacing: -1.4px;
      }

      > a {
        margin-bottom: 20px;
        font-size: 9px;
        line-height: 2em;

        &::after {
          width: 6px;
          height: 6px;
          right: -11px;
          top: 4px;
        }
      }
    }
  `}
  
  ${media.mobileS`
    flex: none;
    padding-left: calc(15px / 2);
    padding-bottom: 40px;

    > div {
      width: 100%;

      > h1 {
        margin-bottom: 13px;
        font-size: 20px;
        line-height: 1.63;
        letter-spacing: -1.2px;
      }

      > a {
        margin-bottom: 17px;
        font-size: 8px;
        line-height: 2em;

        &::after {
          width: 5px;
          height: 5px;
          right: -9px;
          top: 3px;
        }
      }
    }
  `}
`

export const Logo = styled.svg`
  ${media.desk1600`
    width: 111px;
    height: 48px;
    margin-bottom: 10px;
  `}
  
  ${media.desk1200`
    width: 111px;
    height: 48px;
  `}
  
  ${media.tabletB`
    width: 111px;
    height: 48px;
    margin-bottom: 20px;
  `}
  
  ${media.tablet`
    width: 111px;
    height: 48px;
    margin-bottom: 20px;
  `}
  
  ${media.mobile`
    width: 55px;
    height: 24px;
    margin-bottom: 10px;
  `}
  
  ${media.mobileS`
    width: 48px;
    height: 21px;
    margin-bottom: 9px;
  `}
`
