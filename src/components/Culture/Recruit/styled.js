import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  ${media.desk1600`
    margin-top: 100px;
    margin-left: 247px;
    margin-bottom: 180px;
  `}
  ${media.desk1200`
    margin-top: 80px;
    margin-left: 136px;
    margin-bottom: 150px;
  `}
  ${media.tabletB`
    margin-top: 100px;
    margin-bottom: 150px;
    text-align: center;
  `}
  ${media.tablet`
    margin-top: 100px;
    margin-bottom: 150px;
    text-align: center;
  `}
  ${media.mobile`
    margin-top: 50px;
    margin-bottom: 75.5px;
    text-align: center;
  `}
  ${media.mobileS`
    margin-top: 50px;
    margin-bottom: 75.5px;
    text-align: center;
  `}
`

export const HrLine = styled.div`
  display: inline-block;
  vertical-align: middle;
  background: #000;
  ${media.desk1600`
    width: 80px;
    height: 1px;
    margin-right: 20px;
  `}
  ${media.desk1200`
    width: 80px;
    height: 1px;
    margin-right: 20px;
  `}
  ${media.tabletB`
    display: none;
    width: 80px;
    height: 1px;
    margin-right: 50px;
    margin-top: 49px;
    vertical-align: top;
  `}
  ${media.tablet`
    display: none;
    width: 80px;
    height: 1px;
    margin-right: 50px;
    margin-top: 49px;
    vertical-align: top;
  `}
  ${media.mobile`
    display: none;
  `}
  ${media.mobileS`
    display: none;
  `}
`

export const Text = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;

  p {
    font-weight: bold;
  }

  b {
    font-weight: bold;
  }
  ${media.desk1600`
    p {
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 1.75;
    }
    b, span {
      font-size: 16px;
      line-height: 2.19;
    }
  `}
  ${media.desk1200`
    p {
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 1.75;
    }
    b, span {
      font-size: 16px;
      line-height: 2.19;
    }
  `}
  ${media.tabletB`
    display: block;
    text-align: center;
    p {
      margin-bottom: 10px;
      font-size: 28px;
      line-height: 1.79;
    }
    b, span {
      font-size: 24px;
      line-height: 2.08;
    }
  `}
  ${media.tablet`
    display: block;
    text-align: center;
    p {
      margin-bottom: 10px;
      font-size: 28px;
      line-height: 1.79;
    }
    b, span {
      font-size: 24px;
      line-height: 2.08;
    }
  `}
  ${media.mobile`
    display: block;
    text-align: center;
    p {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 1.5;
    }
    b, span {
      font-size: 12px;
      line-height: 2.08;
    }
  `}
  ${media.mobileS`
    display: block;
    text-align: center;
    p {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 1.5;
    }
    b, span {
      font-size: 12px;
      line-height: 2.08;
    }
  `}
`