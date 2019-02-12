import styled, { css } from 'styled-components'
import media from 'utils/media'

const Clearfix = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const OpenBtn = styled.button`
  padding: 7px 0 0;
  line-height: 100px;
  background: none;
  border: none;
  > svg {
    width: 38px;
    height: 22px;
  }

  ${media.desk1600`display: none;`}
  ${media.desk1200`display: none;`}

  ${media.mobile`
    padding-top: 4px;
    line-height: 50px;
   
    > svg {
      width: 19px;
      height: 11px;
    }
  `}

  ${media.mobileS`
    padding-top: 4px;
    line-height: 50px;

    > svg {
      width: 19px;
      height: 11px;
    }
  `}
`

export const Overlay = styled.div`
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
`

export const Header = styled.div`
  width: 100%;
  position: relative;

  ${media.tabletB`
    height: 100px;
  `}
  
  ${media.tablet`
    height: 100px;
  `}
  
  ${media.mobile`
    height: 50px;
  `}

  ${media.mobileS`
    height: 50px;
  `}
`

export const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: 46px;
  transform: translateY(-50%);

  > svg {
    width: 32px;
    height: 32px;
  }

  ${media.mobile`
    width: 25px;
    height: 25px;
    right: 23px;

    > svg {
      width: 16px;
      height: 16px;
    }
  `}
  
  ${media.mobileS`
    width: 25px;
    height: 25px;
    right: 23px;

    > svg {
      width: 16px;
      height: 16px;
    }
  `}
`

export const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  min-height: 300px;

  ${media.mobile`
    height: calc(100% - 50px);
  `}
  
  ${media.mobileS`
    height: calc(100% - 50px);
  `}
`

export const Menus = styled.div`
  width: 100%;
  height: 45%;
  padding: 30px 140px;
  position: relative;

  > ul {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    > li {

      > a {
        color: #fff;
        font-size: 50px;
        font-weight: 700;
        line-height: 100px;
        letter-spacing: -3px;
        position: relative;
        bottom: 4px;
      }
    }
  }

  ${media.mobile`
    padding: 30px 55px;

    > ul {
      > li {
        > a {
          font-size: 25px;
          line-height: 50px;
          letter-spacing: -1.5px;
          bottom: 2px;
        }
      }
    }
  `}
  
  ${media.mobileS`
    padding: 20px 35px;

    > ul {
      > li {
        > a {
          font-size: 25px;
          line-height: 50px;
          letter-spacing: -1px;
          bottom: 2px;
        }
      }
    }
  `}
`

export const Footer = styled.div`
  width: 100%;
  height: 55%;
  min-height: 300px;
  padding: 80px 140px;
  border-top: 1px solid #444;

  ${media.mobile`
    padding: 40px 55px;
  `}
  
  ${media.mobileS`
    padding: 20px 35px;
  `}
`

export const Label = styled.p`
  margin-bottom: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 2.8px;
  opacity: 0.6;
  text-transform: uppercase;

  ${media.mobile`
    font-size: 9px;
    line-height: 22.5px;
  `}
  
  ${media.mobileS`
    font-size: 9px;
    line-height: 22.5px;
  `}
`

export const SNS = styled.ul`
  margin-bottom: 80px;
  
  ${Clearfix}

  > li {
    float: left;

    svg {
      width: 48px;
      height: 48px;
    }

    & + li {
      margin-left: 30px;
    }
  }

  ${media.mobile`
    margin-bottom: 40px;
    
    > li {
      svg {
        width: 24px;
        height: 24px;
      }

      & + li {
        margin-left: 15px;
      }
    }
  `}
  
  ${media.mobileS`
    margin-bottom: 40px;

    > li {
      svg {
        width: 24px;
        height: 24px;
      }
  
      & + li {
        margin-left: 15px;
      }
    }
  `}
`

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  opacity: 0.6;

  ${media.mobile`
    font-size: 10px;
    line-height: 20px;
  `}
  
  ${media.mobileS`
    font-size: 10px;
    line-height: 20px;
  `}
`