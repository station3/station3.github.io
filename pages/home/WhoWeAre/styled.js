import styled, { css } from 'styled-components'
import withReveal from 'react-reveal/withReveal'
import Fade from 'react-reveal/Fade'

import media from 'utils/media'

const Clearfix = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const Wrap = styled.div`

  ${media.desk1600`
    padding: 120px 0;
    position: relative;
  `}
  
  ${media.desk1400`
    padding: 100px 0;
    position: relative;
  `}
  
  ${media.desk1200`
    padding: 100px 0;
    position: relative;
  `}

  ${media.tabletB`
    padding: 130px 0;
  `}
  
  ${media.tablet`
    padding: 130px 0;
  `}
  
  ${media.mobile`
    padding: 75px 0;
  `}
  
  ${media.mobileS`
    padding: 75px 0;
  `}
`

export const Content = styled.div`
  position: relative;

  ${media.desk1600`
    padding-left: 247px;
  `}
  
  ${media.desk1400`
    padding-left: 187px;
  `}
  
  ${media.desk1200`
    padding-left: 135px;
  `}
`

export const Label = styled.h1`
  color: #000;
  font-weight: 700;
  text-transform: uppercase;

  ${media.desk1600`
    font-size: 13px;
    line-height: 40px;
    letter-spacing: 2px;
    position: absolute;
    top: 115px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}
  
  ${media.desk1400`
    font-size: 11px;
    line-height: 40px;
    letter-spacing: 1.7px;
    position: absolute;
    top: 95px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}
  
  ${media.desk1200`
    font-size: 11px;
    line-height: 40px;
    letter-spacing: 1.7px;
    position: absolute;
    top: 95px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}

  ${media.tabletB`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.tablet`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.mobile`
    margin-bottom: 7px;
    font-size: 9px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
  
  ${media.mobileS`
    margin-bottom: 7px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.25px;
  `}
`

export const Title = styled.h1`
  width: 100%;
  color: #000;
  word-break: keep-all;

  ${media.desk1600`
    max-width: 817px;
    margin-bottom: 120px;
    font-size: 34px;
    line-height: 50px;
    white-space: pre-line;  
  `}
  
  ${media.desk1400`
    max-width: 625px;
    margin-bottom: 100px;
    font-size: 28px;
    line-height: 42px;
    white-space: pre-line;  
  `}
  
  ${media.desk1200`
    max-width: 625px;
    margin-bottom: 100px;
    font-size: 26px;
    line-height: 40px;
    white-space: pre-line;  
  `}

  ${media.tabletB`
    max-width: 879px;
    margin-bottom: 130px;
    font-size: 34px;
    line-height: 50px;
    white-space: pre-line;
  `}
  
  ${media.tablet`
    max-width: 610px;
    margin-bottom: 130px;
    font-size: 28px;
    line-height: 50px;
    white-space: pre-line;
  `}
  
  ${media.mobile`
    max-width: 305px;
    margin-bottom: 75px;
    font-size: 17px;
    line-height: 25px;
    white-space: pre-line;
  `}
  
  ${media.mobileS`
    max-width: 269px;
    margin-bottom: 75px;
    font-size: 16px;
    line-height: 25px;
    white-space: pre-line;
  `}
`

export const CardWrap = styled.div`
  width: 100%;
  position: relative;

  ${Clearfix};
`

const Card = styled.div`
  float: left;
  
  > h1 {
    color: #fff;
    text-transform: uppercase;
  }

  > p {
    width: 100%;
    color: #fff;
    font-weight: 700;
    word-break: keep-all;
  }


  ${media.desk1600`
    width: calc(50% - 15px);
    height: 330px;
    padding: 0 38px;
    padding-top: 38px;

    > h1 {
      height: 45px;
      margin-bottom: 30px;
      font-size: 13px;
      line-height: 45px;
      letter-spacing: 2px;
    }

    > p {
      max-width: 442px;
      font-size: 30px;
      line-height: 45px;
    }
  `}
  
  ${media.desk1400`
    width: calc(50% - 15px);
    height: 297px;
    padding: 0 34px;
    padding-top: 34px;

    > h1 {
      height: 40px;
      margin-bottom: 30px;
      font-size: 12px;
      line-height: 40px;
      letter-spacing: 1.8px;
    }

    > p {
      max-width: 353px;
      font-size: 26px;
      line-height: 40px;
    }
  `}
  
  ${media.desk1200`
    width: calc(50% - 14px);
    height: 265px;
    padding: 0 30px;
    padding-top: 30px;

    > h1 {
      height: 37px;
      margin-bottom: 20px;
      font-size: 10px;
      line-height: 37px;
      letter-spacing: 1.6px;
    }

    > p {
      max-width: 353px;
      font-size: 24px;
      line-height: 35px;
    }
  `}

  ${media.tabletB`
    width: calc(50% - 10px);
    height: 400px;
    padding-top: 40px;
    padding-left: 40px;

    > h1 {
      height: 45px;
      margin-bottom: 40px;
      font-size: 18px;
      line-height: 45px;
      letter-spacing: 2.8px;
    }

    > p {
      max-width: 270px;
      font-size: 30px;
      line-height: 45px;
    }
  `}
  
  ${media.tablet`
    width: calc(50% - 10px);
    height: 400px;
    padding-top: 30px;
    padding-left: 30px;

    > h1 {
      height: 45px;
      margin-bottom: 40px;
      font-size: 18px;
      line-height: 45px;
      letter-spacing: 2.8px;
    }

    > p {
      max-width: 242px;
      font-size: 25px;
      line-height: 45px;
    }
  `}
  
  ${media.mobile`
    width: calc(50% - 5px);
    height: 205px;
    padding: 0 20px;
    padding-top: 25px;

    > h1 {
      height: 22.5px;
      margin-bottom: 2.5px;
      font-size: 9px;
      line-height: 22.5px;
      letter-spacing: 1.4px;
    }

    > p {
      max-width: 121px;
      font-size: 15px;
      line-height: 22.5px;
    }
  `}
  
  ${media.mobileS`
    width: calc(50% - 5px);
    height: 205px;
    padding: 0 15px;
    padding-top: 20px;

    > h1 {
      height: 22.5px;
      margin-bottom: 2.5px;
      font-size: 8px;
      line-height: 20px;
      letter-spacing: 1.2px;
    }

    > p {
      max-width: 105px;
      font-size: 13px;
      line-height: 20px;
    }
  `}
`

export const Mission = withReveal(styled(Card)`
  background-image: linear-gradient(120deg, #1971fe, #224bbd);
`, <Fade bottom cascade distance="50px" />)

export const Vision = withReveal(styled(Card)`
  background-image: linear-gradient(120deg, #294bb1, #172e8d);
  position: relative;
  margin-top: 114px;

  ${media.desk1600`
    margin-left: 30px;
  `}
  
  ${media.desk1400`
    margin-left: 30px;
  `}
  
  ${media.desk1200`
    margin-left: 28px;
  `}

  ${media.tabletB`
    margin-left: 20px;
  `}
  
  ${media.tablet`
    margin-left: 20px;
  `}
  
  ${media.mobile`
    margin-left: 10px;
  `}
  
  ${media.mobileS`
    margin-left: 10px;
  `}
`, <Fade bottom cascade distance="50px" delay={100} />)
