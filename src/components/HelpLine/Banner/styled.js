import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  width: 100%;
  position: relative;
  ${media.desk1600`
    padding-top: 43.056%;
  `}
  ${media.desk1200`
    padding-top: 43.036%;
  `}
  ${media.tabletB`
    padding-top: 86.283%;
  `}
  ${media.tablet`
    padding-top: 113.372%;
  `}
  ${media.mobile`
    padding-top: 138.06%;
  `}
  ${media.mobileS`
    padding-top: 137.931%;
  `}
`

export const Table = styled.div`
  position: absolute;
  width: 100%;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${media.desk1600`
    background-image: url(${withPrefix('/images/helpLine/banner/1600.jpg')});
  `}
  ${media.desk1200`
    background-image: url(${withPrefix('/images/helpLine/banner/1600.jpg')});
  `}
  ${media.tabletB`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 60px;
    padding-bottom: 80px;
    background-image: url(${withPrefix('/images/helpLine/banner/1024.jpg')});
  `}
  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 40px;
    padding-bottom: 80px;
    background-image: url(${withPrefix('/images/helpLine/banner/750.jpg')});
  `}
  ${media.mobile`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: calc(30px / 2);
    padding-bottom: calc(80px / 2);
    background-image: url(${withPrefix('/images/helpLine/banner/750.jpg')});
  `}
  ${media.mobileS`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: calc(40px / 2);
    padding-bottom: calc(80px / 2);
    background-image: url(${withPrefix('/images/helpLine/banner/750.jpg')});
  `}
`

export const Label = styled.h1`
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;

  ${media.desk1600`
    font-size: 13px;
    line-height: 44px;
    letter-spacing: 1.69px;
    position: absolute;
    top: 50%;
    transform: rotate(-90deg) translateX(-50%);
    transform-origin: top left;
  `}

  ${media.desk1200`
    font-size: 11px;
    line-height: 44px;
    letter-spacing: 1.69px;
    position: absolute;
    top: 50%;
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
    font-size: 15px;
    line-height: 39px;
    letter-spacing: 2.5px;
  `}

  ${media.mobileS`
    margin-bottom: 2px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
`

export const TextWrap = styled.div`
  
  ${media.desk1600`
    position: absolute;
    top: 50%;
    left: 135px;
    transform: translateY(-50%);
  `}
  ${media.desk1200`
    position: absolute;
    top: 50%;
    left: 135px;
    transform: translateY(-50%);
  `}
  ${media.tabletB``}
  ${media.tablet``}
  ${media.mobile``}
  ${media.mobileS``}
`

export const Text = styled.h1`
  width: 100%;
  color: #fff;
  font-weight: bold;
  word-break: keep-all;

  ${media.desk1600`
    max-width: 778px;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -0.3px;
  `}
  ${media.desk1200`
    max-width: 778px;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -0.3px;
  `}
  ${media.tabletB`
    max-width: 677px;
    font-size: 50px;
    line-height: 75px;
    letter-spacing: -1.8px;

    > span, font {
      display: block;
    }
  `}
  ${media.tablet`
    max-width: 560px;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -3px;

    > span, font {
      display: block;
    }
  `}
  ${media.mobile`
    max-width: 459px;
    font-size: calc(50px / 2);
    line-height: calc(70px / 2);
    letter-spacing: -1.5px;
    > span, font {
      display: block;
    }
  `}
  ${media.mobileS`
    max-width: 220px;
    font-size: calc(45px / 2);
    line-height: calc(65px / 2);
    letter-spacing: -1.35px;
    > span, font {
      display: block;
    }
  `}
`
