import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  ${media.desk1600`
    width: 287px;
    height: 60px;
    margin-left: 207px;
  `}
  ${media.desk1200`
    width: 234.9px;
    height: 48.6px;
    margin-left: 162px;
  `}
  ${media.tabletB`
    display: block;
    width: 409px;
    height: 80px;
    margin: 60px auto 0;
  `}
  ${media.tablet`
    display: block;
    width: 409px;
    height: 80px;
    margin: 60px auto 0;
  `}
  ${media.mobile`
    display: block;
    width: 204.5px;
    height: 40px;
    margin: 30px auto 0;
  `}
  ${media.mobileS`
    display: block;
    width: 179.5px;
    height: 38px;
    margin: 25px auto 0;
  `}
`


export const Select = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  text-align: left;
  ${media.desk1600`
    padding: 0 30px;
  `}
  ${media.desk1200`
    padding: 0 24.9px 0 24px;
  `}
  ${media.tabletB`
    padding: 0 40px;
  `}
  ${media.tablet`
    padding: 0 40px;
  `}
  ${media.mobile`
    padding: 0 20px;
  `}
  ${media.mobileS`
    padding: 0 19px;
  `}
`

export const SelectBtn = styled.div`
  font-weight: bold;
  > svg {
    position: absolute;
  }
  ${media.desk1600`
    font-size: 16px;
    line-height: 60px;
    svg {
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
    }
  `}
  ${media.desk1200`
    font-size: 12px;
    line-height: 48.6px;
    svg {
      top: 50%;
      right: 24.9px;
      width: 10px;
      height: 5px;
      transform: translateY(-50%);
    }
  `}
  ${media.tabletB`
    font-size: 24px;
    line-height: 80px;
    svg {
      top: 50%;
      right: 40px;
      width: 20px;
      height: 11px;
      transform: translateY(-50%);
    }
  `}
  ${media.tablet`
    font-size: 24px;
    line-height: 80px;
    svg {
      top: 50%;
      right: 40px;
      width: 20px;
      height: 11px;
      transform: translateY(-50%);
    }
  `}
  ${media.mobile`
    font-size: 12px;
    line-height: 40px;
    svg {
      top: 50%;
      right: 20px;
      width: 10px;
      height: 5.5px;
      transform: translateY(-50%);
    }
  `}
  ${media.mobileS`
    font-size: 11px;
    line-height: 38px;
    svg {
      top: 50%;
      right: 19px;
      width: 10px;
      height: 5.5px;
      transform: translateY(-50%);
    }
  `}
`

export const RecruitSite = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background: #000;
  > li {
    border-bottom: 1px solid #444;
    > a {
      display: block;
      font-weight: 700;
      color: #fff;
      letter-spacing: normal;
    }
  }

  ${media.desk1600`
    bottom: 60px;

    > li {
      height: 60px;
      padding: 0 30px;

      > a {
        font-size: 15px;
        line-height: 60px;
      }
    }
  `}

  ${media.desk1200`
    bottom: 48.6px;
    
    > li {
      height: 48.6px;
      padding: 0 24.9px 0 24px;
      
      > a {
        font-size: 12px;
        line-height: 48.6px;
      }
    }
  `}

  ${media.tabletB`
    bottom: 80px;

    > li {
      height: 80px;
      padding: 0 40px;

      > a {
        font-size: 24px;
        line-height: 80px;
      }
    }
  `}

  ${media.tablet`
    bottom: 80px;

    > li {
      height: 80px;
      padding: 0 40px;

      > a {
        font-size: 24px;
        line-height: 80px;
      }
    }
  `}

  ${media.mobile`
    bottom: 40px;
    > li {
      height: 40px;
      padding: 0 20px;
      > a {
        font-size: 12px;
        line-height: 40px;
      }
    }
  `}

  ${media.mobileS`
    bottom: 38px;
    > li {
      height: 38px;
      padding: 0 19px;
      > a {
        font-size: 12px;
        line-height: 38px;
      }
    }
  `}
`
