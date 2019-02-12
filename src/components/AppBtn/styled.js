import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import media from 'utils/media'

export const BtnWrap = styled.div`
  display: flex;
  font-size: 0;
  ${({type}) => !!type && `justify-content: center;`}
`

const Btn = styled.a`
  border: 0;
  background-color: transparent;

  ${media.desk1600`
    width: 129px;
    height: 42px;

    & + a {
      margin-left: 12px;
    }
  `}
  
  ${media.desk1200`
    width: 103px;
    height: 34px;
    
    & + a {
      margin-left: 10px;
    }
  `}
  
  ${media.tabletB`
    width: 160px;
    height: 53px;
    
    & + a {
      margin-left: 13px;
    }
  `}
  
  ${media.tablet`
    width: 160px;
    height: 53px;

    & + a {
      margin-left: 13px;
    }
  `}
  
  ${media.mobile`
    width: calc(160px / 2);
    height: calc(53px / 2);

    & + a {
      margin-left: calc(13px / 2);
    }
  `}
  
  ${media.mobileS`
    width: calc(139px / 2);
    height: calc(46px / 2);

    & + a {
      margin-left: 6px;
    }
  `}
`

export const AppleBtn = styled(Btn)`
  background: url(${withPrefix('/images/service/apple.svg')}) center center no-repeat;
  background-size: contain;
`

export const GoogleBtn = styled(Btn)`
  background: url(${withPrefix('/images/service/google_play.svg')}) center center no-repeat;
  background-size: contain;
`
