import styled, { css } from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  width: 100%;
  position: relative;
  ${media.desk1600`
    margin-top: 214px;
    padding-top: 43.056%;
  `}
  ${media.desk1400`
    margin-top: 159px;
    padding-top: 38.871%;
  `}
  ${media.desk1200`
    margin-top: 159px;
    padding-top: 38.871%;
  `}
  ${media.tabletB`
    margin-top: 182px;
    padding-top: 59.403%;
  `}
  ${media.tablet`
    margin-top: 182px;
    padding-top: 78.053%;
  `}
  ${media.mobile`
    margin-top: 97.5px;
    padding-top: 100%;
  `}
  ${media.mobileS`
    margin-top: 84px;
    padding-top: 100%;
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
    background-image: url('/static/images/culture/banner/1600.jpg');
  `}
  ${media.desk1400`
    background-image: url('/static/images/culture/banner/1200.jpg');
  `}
  ${media.desk1200`
    background-image: url('/static/images/culture/banner/1200.jpg');
  `}
  ${media.tabletB`
    background-image: url('/static/images/culture/banner/1600.jpg');
  `}
  ${media.tablet`
    background-image: url('/static/images/culture/banner/1600.jpg');
  `}
  ${media.mobile`
    background-image: url('/static/images/culture/banner/375.jpg');
  `}
  ${media.mobileS`
    background-image: url('/static/images/culture/banner/320.jpg');
  `}
`

export const TextWrap = styled.div`
  position: absolute;
  ${media.desk1600`
    top: -116px;
    left: 247px;
  `}
  ${media.desk1400`
    top: -97px;
    left: 109px;
  `}
  ${media.desk1200`
    top: -97px;
    left: 109px;
  `}
  ${media.tabletB`
    top: -113px;
    left: 69px;
  `}
  ${media.tablet`
    top: -112px;
    left: 40px;
  `}
  ${media.mobile`
    top: -62.5px;
    left: 30px;
  `}
  ${media.mobileS`
    top: -54px;
    left: 25px;
  `}
`

export const Text = styled.h1`
  width: 100%;
  font-weight: bold;
  color: #000;
  ${media.desk1600`
    max-width: 773px;
    font-size: 50px;
    line-height: 1.4;
    letter-spacing: -3px;
  `}
  ${media.desk1400`
    max-width: 619px;
    font-size: 40px;
    line-height: 1.5;
    letter-spacing: -2.4px;
  `}
  ${media.desk1200`
    max-width: 619px;
    font-size: 40px;
    line-height: 1.5;
    letter-spacing: -2.4px;
  `}
  ${media.tabletB`
    max-width: 765px;
    font-size: 50px;
    line-height: 1.5;
    letter-spacing: -3px;
  `}
  ${media.tablet`
    max-width: 447px;
    font-size: 50px;
    line-height: 1.5;
    letter-spacing: -3px;
  `}
  ${media.mobile`
    max-width: 223.5px;
    font-size: 25px;
    line-height: 1.5;
    letter-spacing: -1.5px;
  `}
  ${media.mobileS`
    max-width: 201.5px;
    font-size: 22.5px;
    line-height: 1.44;
    letter-spacing: -1.35px;
  `}
`
