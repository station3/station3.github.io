import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import { Label as BasicLabel } from '../styled'
import media from 'utils/media'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  
  ${media.desk1600`
    margin-top: 120px;
    margin-bottom: 240px;
  `}
  ${media.desk1200`
    margin-top: 100px;
    margin-bottom: 240px;
  `}
  ${media.tabletB`
    margin-top: 130px;
    margin-bottom: 115px;
  `}
  ${media.tablet`
    margin-top: 130px;
    margin-bottom: 130px;
  `}
  ${media.mobile`
    margin-top: calc(130px / 2);
    margin-bottom: calc(217px / 2);
  `}
  ${media.mobileS`
    margin-top: calc(101px / 2);
    margin-bottom: calc(217px / 2);
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
  > p {
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
  }
  > ul {
    display: inline-block;
    > li {
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
    > p {
      font-size: 30px;
      line-height: 1.5;

      > span {
        display: block;
      }
    }
    > ul,
    > div {
      float: right;
      width: 510px;

      > li {
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
    > p {
      font-size: 30px;
      line-height: 1.5;

      > span {
        display: block;
      }
    }
    > ul,
    > div {
      float: right;
      width: 510px;
      > li {
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
    > p {
      margin-bottom: 30px;
      font-size: 34px;
      line-height: 1.47;
    }
    > ul,
    > div {
      display: block;

      > li {
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
    > p {
      margin-bottom: 60px;
      font-size: 34px;
      line-height: 1.47;
    }
    > ul,
    > div {
      display: block;

      > li {
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
    > p {
      margin-bottom: 10px;
      font-size: 17px;
      line-height: 1.47;
    }
    > ul,
    > div {
      display: block;

      > li {
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
    > p {
      margin-bottom: 10px;
      font-size: 17px;
      line-height: 1.47;
    }
    > ul,
    > div {
      display: block;

      > li {
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

export const ReportWrap = styled.div`
  > h2 {
    font-weight: 700;
  }

  > p {
    word-break: keep-all;
  }

  margin-top: 60px;

  ${media.desk1600`
    > h2 {
      margin-bottom: 16px;
      font-size: 20px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
    
    > div {
      margin: 12px 0;
    }
  `}

  ${media.desk1200`
    > h2 {
      margin-bottom: 16px;
      font-size: 20px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }

    > div {
      margin: 12px 0;
    }
  `}
  
  ${media.tabletB`
    > h2 {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 47px;
    }

    p {
      font-size: 24px;
      line-height: 47px;
    }
  `}
  ${media.tablet`
    > h2 {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 47px;
    }

    p {
      font-size: 24px;
      line-height: 47px;
    }
  `}
  ${media.mobile`
    > h2 {
      margin-bottom: 10px;
      font-size: 13px;
      line-height: calc(47px / 2);
    }

    p {
      font-size: 13px;
      line-height: calc(47px / 2);
    }

    margin-top: calc(40px / 2);
  `}
  ${media.mobileS`
    > h2 {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: calc(47px / 2);
    }

    p {
      font-size: 12px;
      line-height: calc(47px / 2);
    }

    margin-top: calc(40px / 2);
  `}
`;

export const ReportChild = styled(ReportWrap)`
  margin-top: 30px !important;

  > p {
    > font {
      color: #8f8f8f;
    }
  }

  ${media.desk1600`
    > p {
      line-height: 30px;
    }
  `}
  ${media.desk1200`
    > p {
      line-height: 30px;
    }
  `}
  ${media.tabletB``}
  ${media.tablet``}
  ${media.mobile`
    margin-top: calc(40px / 2) !important;
  `}
  ${media.mobileS`
    margin-top: calc(40px / 2) !important;
  `}
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 50px;
  color: #fff;
  font-weight: 700;
  word-break: keep-all;
  background-color: #000;
  background-image: url(${withPrefix('/images/helpLine/report/arrow.svg')});
  background-repeat: no-repeat;
  background-position: center right 24px;

  & + a {
    margin-top: 16px;
  }

  ${media.desk1600`
    width: 100%;
    max-width: 450px;
    height: 60px;
    font-size: 16px;
    line-height: 22px;
    background-size: 9px 12px;
  `}
  ${media.desk1200`
    width: 100%;
    max-width: 450px;
    height: 60px;
    font-size: 16px;
    line-height: 22px;
    background-size: 9px 12px;
  `}
  ${media.tabletB`
    width: 100%;
    height: 90px;
    font-size: 24px;
    line-height: 30px;
    background-size: 14px 24px;
  `}
  ${media.tablet`
    width: 100%;
    height: 90px;
    font-size: 24px;
    line-height: 30px;
    background-size: 14px 24px;
  `}
  ${media.mobile`
    width: 100%;
    height: calc(90px / 2);
    font-size: calc(24px / 2);
    line-height: 15px;
    background-size: 9px 12px;
  `}
  ${media.mobileS`
    width: 100%;
    height: calc(90px / 2);
    font-size: calc(24px / 2);
    line-height: 15px;
    background-size: 9px 12px;
  `}
`;

export const QRCode = styled.div`
  background-image: url(${withPrefix('/images/helpLine/report/qrcode.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${media.desk1600`
    width: 175px;
    height: 175px;
  `}
  ${media.desk1200`
    width: 175px;
    height: 175px;
  `}
  ${media.tabletB`
    width: 175px;
    height: 175px;
  `}
  ${media.tablet`
    width: 175px;
    height: 175px;
  `}
  ${media.mobile`
    width: 150px;
    height: 150px;
  `}
  ${media.mobileS`
    width: 150px;
    height: 150px;
  `}
`;
