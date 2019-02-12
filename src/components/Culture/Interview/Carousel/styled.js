import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  ${media.desk1600`
    padding-left: 247px;
    padding-right: 140px;
  `}
  ${media.desk1200`
    padding-left: 135px;
    padding-right: 140px;
  `}
  ${media.tabletB`
  `}
  ${media.tablet`
  `}
  ${media.mobile``}
  ${media.mobileS``}
`

export const Carousel = styled.div`
  display: inline-block;
  width: 100%;
  ${media.desk1600`
    max-width: 745px;
  `}
  ${media.desk1200`
    max-width: 745px;
  `}
  ${media.tabletB`
    max-width: 827px;
  `}
  ${media.tablet`
    max-width: 648px;
  `}
  ${media.mobile`
    max-width: 324px;
  `}
  ${media.mobileS`
    max-width: 286px;
  `}
`

export const CarouselList = styled.div`
  color: #000;
  p {
    word-break: keep-all;
  }
  ${media.desk1600`
    p {
      min-height: 182px;
      margin-bottom: 20px;
      font-size: 30px;
      line-height: 1.5;
    }
    label {
      font-size: 16px;
      line-height: 2.81;
    }
  `}
  ${media.desk1200`
    p {
      min-height: 163px;
      margin-bottom: 20px;
      font-size: 26px;
      line-height: 1.54;
    }
    label {
      font-size: 14px;
      line-height: 3.21;
    }
  `}
  ${media.tabletB`
    p {
      min-height: 203px;
      margin-bottom: 40px;
      font-size: 34px;
      line-height: 1.47;
    }
    label {
      font-size: 24px;
      line-height: 1.88;
    }
  `}
  ${media.tablet`
    p {
      min-height: 203px;
      margin-bottom: 40px;
      font-size: 34px;
      line-height: 1.47;
    }
    label {
      font-size: 24px;
      line-height: 1.88;
    }
  `}
  ${media.mobile`
    p {
      min-height: 101.5px;
      margin-bottom: 20px;
      font-size: 17px;
      line-height: 1.5;
    }
    label {
      font-size: 12px;
      line-height: 1.88;
    }
  `}
  ${media.mobileS`
    p {
      min-height: 91.5px;
      margin-bottom: 20px;
      font-size: 15px;
      line-height: 1.5;
    }
    label {
      font-size: 12px;
      line-height: 1.88;
    }
  `}
`

export const CarouselCount = styled.div`
  ${media.desk1600`
    position: absolute;
    top: 0;
    right: 0;
  `}
  ${media.desk1200`
    position: absolute;
    top: 0;
    right: 0;
  `}
  ${media.tabletB`
    position: relative;
    margin-top: 12px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
  ${media.tablet`
    position: relative;
    margin-top: 12px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
  ${media.mobile`
    position: relative;
    margin-top: 12px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
  ${media.mobileS`
    position: relative;
    margin-top: 6px;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  `}
`

export const Counter = styled.div`
  text-align: right;
  label {
    font-weight: bold;
    color: #333;
  }
  > div {
    background: #d8d8d8;
  }
  span {
    color: #888;
  }
  ${media.desk1600`
    label {
      font-size: 34px;
      line-height: 1.32;
    }
    > div {
      width: 140px;
      height: 1px;
      margin-top: 13px;
      margin-bottom: 17px;
      > div {
        width: 70px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 20px;
      line-height: 1;
    }
  `}
  ${media.desk1200`
    label {
      font-size: 34px;
      line-height: 1.32;
    }
    > div {
      width: 140px;
      height: 1px;
      margin-top: 13px;
      margin-bottom: 17px;
      > div {
        width: 70px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 20px;
      line-height: 1;
    }
  `}
  ${media.tabletB`
    float: right;
    label {
      font-size: 34px;
      line-height: 1.32;
    }
    > div {
      width: 140px;
      height: 1px;
      margin-top: 13px;
      margin-bottom: 17px;
      > div {
        width: 70px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 20px;
      line-height: 1;
    }
  `}
  ${media.tablet`
    float: right;
    label {
      font-size: 34px;
      line-height: 1.32;
    }
    > div {
      width: 140px;
      height: 1px;
      margin-top: 13px;
      margin-bottom: 17px;
      > div {
        width: 70px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 20px;
      line-height: 1;
    }
  `}
  ${media.mobile`
    float: right;
    label {
      font-size: 17px;
      line-height: 1.32;
    }
    > div {
      width: 70px;
      height: 1px;
      margin-top: 6.5px;
      margin-bottom: 8.5px;
      > div {
        width: 35px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 10px;
      line-height: 1;
    }
  `}
  ${media.mobileS`
    float: right;
    label {
      font-size: 17px;
      line-height: 1.32;
    }
    > div {
      width: 70px;
      height: 1px;
      margin-top: 6.5px;
      margin-bottom: 8.5px;
      > div {
        width: 35px;
        height: 1px;
        background: #000;
      }
    }
    span {
      font-size: 10px;
      line-height: 1;
    }
  `}
`

export const CounterBtn = styled.div`
  text-align: right;
  > div {
    display: inline-block;
    cursor: pointer;
    svg {
      fill: #000;
    }
    &:first-of-type {
      margin-right: 29px;
    }
    &.disabled {
      cursor: not-allowed;
      svg {
        fill: #a6a5a5;
      }
    }
  }
  ${media.desk1600`
    margin-top: 117px;
    > div {
      &:first-of-type {
        margin-right: 29px;
      }
      svg {
        width: 11px;
        height: 20px;
      }
    }
  `}
  ${media.desk1200`
    margin-top: 102px;
    > div {
      &:first-of-type {
        margin-right: 29px;
      }
      svg {
        width: 11px;
        height: 20px;
      }
    }
  `}
  ${media.tabletB`
    position: absolute;
    top: 48px;
    left: 0;
  `}
  ${media.tablet`
    position: absolute;
    top: 48px;
    left: 0;
  `}
  ${media.mobile`
    position: absolute;
    top: 25px;
    left: 0;
    transform: translateY(-50%);
    > div {
      svg {
        width: 5.5px;
        height: 10px;
      }
    }
  `}
  ${media.mobileS`
    position: absolute;
    top: 25px;
    left: 0;
    transform: translateY(-50%);
    > div {
      svg {
        width: 5.5px;
        height: 10px;
      }
    }
  `}
`
