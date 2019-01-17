import styled, { css } from 'styled-components'
import media from 'utils/media'

const Clearfix = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const Wrap = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  position: relative;

  ${Clearfix}

  ${media.desk1600`
    padding: 150px 60px 150px 247px;
  `}
  
  ${media.desk1400`
    padding: 120px 40px 120px 187px;
  `}
  
  ${media.desk1200`
    padding: 100px 60px 100px 135px;
  `}
  
  ${media.tabletB`
    padding: 80px 80px 120px;
  `}
  
  ${media.tablet`
    padding: 80px 80px 120px;
  `}
  
  ${media.mobile`
    padding: 40px 25px 60px;
  `}
  
  ${media.mobileS`
    padding: 40px 25px 60px;
  `}
`

export const Label = styled.h1`
  color: #333;
  font-weight: 700;
  text-transform: uppercase;

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
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.tablet`
    padding: 0 60px;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 45px;
    letter-spacing: 2.8px;
  `}
  
  ${media.mobile`
    margin-bottom: 10px;
    font-size: 9px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}

  ${media.mobileS`
    margin-bottom: 10px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
`

export const CeoImg = styled.div`
  float: left;
  position: relative;

  &::after {
    content: '스테이션3 한유순 대표(Station3 CEO)';
    color: #000;
    position: absolute;
  }

  ${media.desk1600`
    width: 540px;
    height: 659px;
    background: url('/static/images/home/message/ceo.jpg') center center no-repeat;
    background-size: cover;

    &::after {
      font-size: 15px;
      line-height: 30px;
      left: 30px;
      bottom: 30px;
    }
  `}

  ${media.desk1400`
    width: 500px;
    height: 610px;
    background: url('/static/images/home/message/ceo.jpg') center center no-repeat;
    background-size: cover;

    &::after {
      font-size: 15px;
      line-height: 30px;
      left: 25px;
      bottom: 25px;
    }
  `}

  ${media.desk1200`
    width: 450px;
    height: 550px;
    background: url('/static/images/home/message/ceo.jpg') center center no-repeat;
    background-size: cover;

    &::after {
      font-size: 14px;
      line-height: 30px;
      left: 20px;
      bottom: 15px;
    }
  `}

  ${media.tabletB`
    width: 100%;
    padding-top: 88.5752%;
    margin-bottom: 60px;
    background: url('/static/images/home/message/ceo_1024.jpg') center center no-repeat;
    background-size: cover;
    
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      font-size: 24px;
      line-height: 30px;
      left: 30px;
      bottom: 30px;
      z-index: 2;
    }
  `}
  
  ${media.tablet`
    width: 100%;
    padding-top: 115.614%;
    margin-bottom: 60px;
    background: url('/static/images/home/message/ceo_768.jpg') center center no-repeat;
    background-size: cover;
    
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      font-size: 24px;
      line-height: 30px;
      left: 30px;
      bottom: 30px;
      z-index: 2;
    }
  `}
  
  ${media.mobile`
    width: 100%;
    padding-top: 115.614%;
    margin-bottom: 30px;
    background: url('/static/images/home/message/ceo_768.jpg') center center no-repeat;
    background-size: cover;
    
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      font-size: 12px;
      line-height: 15px;
      left: 15px;
      bottom: 15px;
      z-index: 2;
    }
  `}

  ${media.mobileS`
    width: 100%;
    padding-top: 115.614%;
    margin-bottom: 30px;
    background: url('/static/images/home/message/ceo_768.jpg') center center no-repeat;
    background-size: cover;
    
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &::after {
      font-size: 11px;
      line-height: 15px;
      left: 13px;
      bottom: 14px;
      z-index: 2;
    }
  `}
`

export const Table = styled.div`

  ${media.desk1600`
    float: left;
    display: table;
    width: calc(100% - 540px);
    height: 659px;
    padding-left: 70px;
  `}

  ${media.desk1400`
    float: left;
    display: table;
    width: calc(100% - 500px);
    height: 610px;
    padding-left: 60px;
  `}

  ${media.desk1200`
    float: left;
    display: table;
    width: calc(100% - 450px);
    height: 550px;
    padding-left: 50px;
  `}
`

export const TextWrap = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: middle;

  > div {
    opacity: 0;

    > h1 {
      width: 100%;
      word-break: keep-all;
      color: #000;
    }

    > p {
      color: #000;
      white-space: pre-line;
      word-break: keep-all;
    }
  }


  ${media.desk1600`
    > div {
      > h1 {
        max-width: 371px;
        margin-bottom: 35px;
        font-size: 34px;
        line-height: 50px;
      }

      > p {
        font-size: 20px;
        line-height: 35px;
      }
    }
  `}

  ${media.desk1400`
    > div {
      > h1 {
        max-width: 284px;
        margin-bottom: 30px;
        font-size: 26px;
        line-height: 42px;
      }
      
      > p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  `}

  ${media.desk1200`
    > div {
      > h1 {
        max-width: 284px;
        margin-bottom: 30px;
        font-size: 26px;
        line-height: 42px;
      }
      
      > p {
        font-size: 14px;
        line-height: 28px;
      }
    }
  `}

  ${media.tabletB`
    > div {
      > h1 {
        max-width: 722px;
        margin-bottom: 30px;
        font-size: 34px;
        line-height: 50px;
      }

      > p {
        font-size: 24px;
        line-height: 40px;
      }
    }
  `}
  
  ${media.tablet`
    > div {
      > h1 {
        max-width: 371px;
        margin-bottom: 30px;
        font-size: 34px;
        line-height: 50px;
      }

      > p {
        font-size: 24px;
        line-height: 40px;
      }
    }
  `}
  
  ${media.mobile`
    > div {
      > h1 {
        max-width: 185.5px;
        margin-bottom: 15px;
        font-size: 17px;
        line-height: 25px;
      }

      > p {
        font-size: 12px;
        line-height: 20px;
      }
    }
  `}

  ${media.mobileS`
    > div {
      > h1 {
        max-width: 185.5px;
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 25px;
      }

      > p {
        font-size: 12px;
        line-height: 20px;
      }
    }
  `}
`
