import styled from 'styled-components'
import { Label as BasicLabel } from '../styled'
import media from 'utils/media'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  ${media.desk1600`
    margin-top: 120px;
  `}
  ${media.desk1200`
    margin-top: 100px;
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
    top: 175px;
    font-size: 13px;
    line-height: 3.46;
    letter-spacing: 2px;
  `}
  ${media.desk1200`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 150px;
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
    margin-bottom: 30px;
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
    line-height: 1.4;
    letter-spacing: 1.25px;
  `}
`

export const BenefitList = styled.div`
  ${media.desk1600`
    margin-left: 247px;
    > div {
      &:not(:last-child) {
        padding-bottom: 50px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 50px;
      }
    }
  `}
  ${media.desk1200`
    margin-left: 135px;
    > div {
      &:not(:last-child) {
        padding-bottom: 50px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 50px;
      }
    }
  `}
  ${media.tabletB`
    > div {
      &:not(:last-child) {
        padding-bottom: 60px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 60px;
      }
    }
  `}
  ${media.tablet`
    display: block;
    > div {
      &:not(:last-child) {
        padding-bottom: 60px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 60px;
      }
    }
  `}
  ${media.mobile`
    display: block;
    > div {
      &:not(:last-child) {
        padding-bottom: 30px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 30px;
      }
    }
  `}
  ${media.mobileS`
    display: block;
    > div {
      &:not(:last-child) {
        padding-bottom: 30px;
        border-bottom: 1px solid #e3e1e1;
      }
      &:not(:first-child) {
        padding-top: 30px;
      }
    }
  `}
`

export const Benefit = styled.div`
  width: 100%;
  color: #000;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  p {
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
  }
  ul {
    display: inline-block;
    li {
      word-break: keep-all;
      &:before {
        content: '';
        display: inline-block;
        border-radius: 100%;
        background: #bebebe;
        vertical-align: middle;
      }
    }
  }
  ${media.desk1600`
    max-width: 946px;
    p {
      font-size: 30px;
      line-height: 1.5;
    }
    ul {
      float: right;
      width: 337px;
      li {
        font-size: 16px;
        line-height: 2.19;
        &:before {
          width: 3px;
          height: 3px;
          margin-right: 10px;
        }
      }
    }
  `}
  ${media.desk1200`
    max-width: 850px;
    p {
      font-size: 30px;
      line-height: 1.5;
    }
    ul {
      float: right;
      width: 337px;
      li {
        font-size: 16px;
        line-height: 2.19;
        &:before {
          width: 3px;
          height: 3px;
          margin-right: 10px;
        }
      }
    }
  `}
  ${media.tabletB`
    max-width: 904px;
    p {
      font-size: 34px;
      line-height: 1.47;
    }
    ul {
      float: right;
      width: calc(100% - 383px);
      max-width: 505px;
      li {
        font-size: 24px;
        line-height: 2.08;
        &:before {
          width: 4px;
          height: 4px;
          margin-right: 17px;
        }
      }
    }
  `}
  ${media.tablet`
    p {
      display: block;
      margin-right: 113px;
      margin-bottom: 20px;
      font-size: 34px;
      line-height: 1.47;
    }
    ul {
      li {
        font-size: 24px;
        line-height: 2.08;
        &:before {
          width: 4px;
          height: 4px;
          margin-right: 17px;
        }
      }
    }
  `}
  ${media.mobile`
    p {
      display: block;
      margin-bottom: 10px;
      font-size: 17px;
      line-height: 1.47;
    }
    ul {
      li {
        font-size: 12px;
        line-height: 2.08;
        &:before {
          width: 2px;
          height: 2px;
          margin-right: 8.5px;
        }
      }
    }
  `}
  ${media.mobileS`
    p {
      display: block;
      margin-bottom: 10px;
      font-size: 17px;
      line-height: 1.47;
    }
    ul {
      li {
        font-size: 12px;
        line-height: 2.08;
        &:before {
          width: 2px;
          height: 2px;
          margin-right: 8.5px;
        }
      }
    }
  `}
`