import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  ${media.desk1600`
    padding: 120px 247px;
    position: relative;
  `}
  
  ${media.desk1200`
    padding: 80px 135px;
    position: relative;
  `}

  ${media.tabletB`
    padding: 100px 0;
  `}

  ${media.tablet`
    padding: 100px 0;
  `}
  
  ${media.mobile`
    padding: 50px 0;
  `}

  ${media.mobileS`
    padding: 50px 0;
  `}
`

export const Content = styled.div`
  position: relative;

  ${media.desk1600`
    &::before {
      content: '';
      width: 80px;
      height: 1px;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  `}
  
  ${media.desk1200`
    &::before {
      content: '';
      width: 80px;
      height: 1px;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  `}
  
  ${media.tabletB`
  `}
`

export const TextWrap = styled.div`
  > p {
    color: #000;
    font-weight: 700;
  }

  ${media.desk1600`
    display: inline-block;
    padding-left: 100px;
    vertical-align: middle;

    > p {
      font-size: 20px;
      line-height: 35px;
    }
  `}
  
  ${media.desk1200`
    display: inline-block;
    padding-left: 100px;
    vertical-align: middle;

    > p {
      font-size: 20px;
      line-height: 35px;
    }
  `}

  ${media.tabletB`
    text-align: center;

    > p {
      font-size: 28px;
      line-height: 50px;
    }
  `}
  
  ${media.tablet`
    text-align: center;

    > p {
      font-size: 28px;
      line-height: 50px;
    }
  `}

  ${media.mobile`
    text-align: center;
    > p {
      font-size: 14px;
      line-height: 25px;
    }
  `}
  
  ${media.mobileS`
    text-align: center;

    > p {
      font-size: 12px;
      line-height: 20px;
    }
  `}
`
export const DownloadBtn = styled.a`
  display: block;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border: 0;
  background-color: #000;

  > span {
    white-space: nowrap;
  }

  > svg {
    position: relative;
    bottom: 2px;
  }

  > span,
  > svg {
    vertical-align: middle;
  }

  ${media.desk1600`
    width: 290px;
    height: 60px;
    font-size: 16px;
    line-height: 57px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;

    > span {
      margin-right: 66px;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  `}

  ${media.desk1200`
    width: 260px;
    height: 54px;
    font-size: 14px;
    line-height: 51px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;

    > span {
      margin-right: 60px;
    }

    > svg {
      width: 18px;
      height: 18px;
    }
  `}

  ${media.tabletB`
    width: 410px;
    height: 80px;
    margin: 0 auto;
    margin-top: 60px;
    font-size: 24px;
    line-height: 76px;

    > span {
      margin-right: 100px;
    }

    > svg {
      width: 23px;
      height: 23px;
    }
  `}
  
  ${media.tablet`
    width: 410px;
    height: 80px;
    margin: 0 auto;
    margin-top: 60px;
    font-size: 24px;
    line-height: 76px;

    > span {
      margin-right: 100px;
    }

    > svg {
      width: 23px;
      height: 23px;
    }
  `}

  ${media.mobile`
    width: 205px;
    height: 40px;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 12px;
    line-height: 38px;

    > span {
      margin-right: 50px;
    }

    > svg {
      width: 13px;
      height: 13px;
    }
  `}
  
  ${media.mobileS`
    width: 205px;
    height: 38px;
    margin: 0 auto;
    margin-top: 25px;
    font-size: 11px;
    line-height: 36px;

    > span {
      margin-right: 35px;
    }
    
    > svg {
      width: 12px;
      height: 12px;
      bottom: 1px;
    }
  `}
`