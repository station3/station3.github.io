import styled from 'styled-components'
import media from 'utils/media'
import { Label as BasicLabel } from '../styled'

export const Wrap = styled.div`
  position: relative;
  ${media.desk1600`
    margin-top: 121px;
  `}
  ${media.desk1200`
    margin-top: 104px;
  `}
  ${media.tabletB`
    margin-top: 130px;
  `}
  ${media.tablet`
    margin-top: 130px;
  `}
  ${media.mobile`
    margin-top: 75.5px;
  `}
  ${media.mobileS`
    margin-top: 65.5px;
  `}
`

export const Label = styled(BasicLabel)`
  ${media.desk1600`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 100px;
    font-size: 13px;
    line-height: 3.46;
    letter-spacing: 2px;
  `}
  ${media.desk1200`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 85px;
    font-size: 11px;
    line-height: 4.09;
    letter-spacing: 1.7px;
  `}
  ${media.tabletB`
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.tablet`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.mobile`
    margin-bottom: 15px;
    font-size: 9px;
    line-height: 1.25;
    letter-spacing: 1.4px;
  `}
  ${media.mobileS`
    margin-bottom: 10px;
    font-size: 8px;
    line-height: 1.25;
    letter-spacing: 1.25px;
  `}
`

export const ContentWrap = styled.div`
  position: relative;
  > div {
    width: 100%;
    word-break: keep-all;
  }
  ${media.desk1600`
    margin-left: 247px;
    > div{
      max-width: 945px;
    }
  `}
  ${media.desk1200`
    margin-left: 135px;
    > div {
      max-width: 850.4px;
    }
  `}
  ${media.tabletB`
    text-align: center;
    > div {
      max-width: 904px;
    }
  `}
  ${media.tablet`
    text-align: center;
    > div {
      max-width: 688px;
    }
  `}
  ${media.mobile`
    text-align: center;
  `}
  ${media.mobileS`
    text-align: center;
  `}
`

export const CircleList = styled.div``

export const Circle = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 100%;
  background: ${({color}) => `linear-gradient(135deg, rgba(${color}, 0.8), rgba(34, 75, 189, 0.8))`};
  width: 100%;
  height: 100%;
  ${media.desk1600`
    max-width: 346px;
    max-height: 346px;
    &:nth-child(n + 2) {
      margin-left: -48px;
    }
  `}
  ${media.desk1200`
    // width: calc((100% + 85px) / 3);
    width: calc(33.3333% + 28.4px);
    max-width: 311.4px;
    max-height: 311.4px;
    &:nth-child(n + 2) {
      margin-left: -43px;
    }
  `}
  ${media.tabletB`
    // width: calc((100% + 92px) / 3);
    width: calc(33.3333% + 30.5px);
    max-width: 332px;
    max-height: 332px;
    &:nth-child(n + 2) {
      margin-left: -46px;
    }
  `}
  ${media.tablet`
    // width: calc((100% + 69.8px) / 3);
    width: calc(33.3333% + 23.1px);
    max-width: 252.6px;
    max-height: 252.6px;
    &:nth-child(n + 2) {
      margin-left: -34.9px;
    }
  `}
  ${media.mobile`
    // width: calc((100% + 34px) / 3);
    width: calc(33.3333% + 11.2px);
    &:nth-child(n + 2) {
      margin-left: -17px;
    }
  `}
  ${media.mobileS`
    // width: calc((100% + 29.4px) / 3);
    width: calc(33.3333% + 9.7px);
    &:nth-child(n + 2) {
      margin-left: -14.7px;
    }
  `}
`

export const CircleOverlay = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`

export const CircleContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  text-align: center;
  label {
    font-weight: bold;
    z-index: 1000;
  }
  
  ${media.desk1600`
    top: 63px;
    label {
      font-size: 30px;
      line-height: 2;
    }
    p {
      margin-top: 5px;
      font-size: 16px;
      line-height: 1.88;
      letter-spacing: -0.4px;
    }
  `}
  ${media.desk1200`
    top: 57px;
    label {
      font-size: 26px;
      line-height: 2.08;
    }
    p {
      margin-top: 6px;
      font-size: 14px;
      line-height: 1.86;
      letter-spacing: -0.4px;
    }
  `}
  ${media.tabletB`
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    label {
      position: relative;
      font-size: 30px;
      line-height: 2;
      z-index: 1000;
    }
    p {
      display: none;
    }
  `}
  ${media.tablet`
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    label {
      font-size: 26px;
      line-height: 2.31;
    }
    p {
      display: none;
    }
  `}
  ${media.mobile`
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    label {
      font-size: 13px;
      line-height: 1.15;
    }
    p {
      display: none;
    }
  `}
  ${media.mobileS`
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    label {
      font-size: 11px;
      line-height: 1.15;
    }
    p {
      display: none;
    }
  `}
`

export const Text = styled.p`
  text-align: left;
  ${media.desk1600`
    margin-top: 60px;
    font-size: 20px;
    line-height: 1.75;
  `}
  ${media.desk1200`
    margin-top: 40.6px;
    font-size: 18px;
    line-height: 1.67;
  `}
  ${media.tabletB`
    margin-top: 60px;
    font-size: 24px;
    line-height: 1.67;
  `}
  ${media.tablet`
    margin-top: 56.4px;
    font-size: 24px;
    line-height: 1.67;
  `}
  ${media.mobile`
    margin-top: 30px;
    font-size: 12px;
    line-height: 1.67;
  `}
  ${media.mobileS`
    margin-top: 20px;
    font-size: 12px;
    line-height: 1.67;
  `}
`










