import styled from 'styled-components'
import media from 'utils/media'
import { Label as BasicLabel } from '../styled'

export const Wrap = styled.div`
  position: relative;
  ${media.desk1600`
    margin-top: 120px;
  `}
  ${media.desk1200`
    margin-top: 104px;
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
    margin-top: 65px;
  `}
`

export const Label = styled(BasicLabel)`
  ${media.desk1600`
    position: absolute;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
    font-size: 13px;
    line-height: 3.46;
    letter-spacing: 2px;

  `}
  ${media.desk1200`
    position: absolute;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
    font-size: 11px;
    line-height: 4.09;
    letter-spacing: 1.7px;
  `}
  ${media.tabletB`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.tablet`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.mobile`
    margin-bottom: 20px;
    font-size: 9px;
    line-height: 1.25;
    letter-spacing: 1.4px;
  `}
  ${media.mobileS`
    margin-bottom: 20px;
    font-size: 9px;
    line-height: 1.25;
    letter-spacing: 1.25px;
  `}
`

export const Block = styled.div`
  ${media.desk1600`
    padding-left: 247px;
    padding-right: 247px;

    > h1 {
      margin-bottom: 30px;
      font-size: 30px;
      line-height: 35px;
    }

    > p {
      font-size: 18px;
      line-height: 34px;
      
      > span {
        display: block;
      }
    }
  `}

  ${media.desk1200`
    padding-left: 135px;
    padding-right: 135px;
    
    > h1 {
      margin-bottom: 30px;
      font-size: 30px;
      line-height: 35px;
    }

    > p {
      font-size: 18px;
      line-height: 35px;

      > span {
        display: block;
      }
    }
  `}
  
  ${media.tabletB`
    max-width: 800px;

    > h1 {
      margin-bottom: 10px;
      font-size: 34px;
      line-height: 50px;
    }

    > p {
      font-size: 24px;
      line-height: 40px;
      word-break: keep-all;
    
      > span > font.tabletB {
        display: block;
      }
    }
  `}
  ${media.tablet`
    > h1 {
      margin-bottom: 10px;
      font-size: 34px;
      line-height: 50px;
    }

    > p {
      font-size: 24px;
      line-height: 40px;
      word-break: keep-all;
    
      > span > font {
        display: block;
      }
    }
  `}
  ${media.mobile`
    > h1 {
      margin-bottom: 10px;
      font-size: calc(34px / 2);
      line-height: calc(50px / 2);
    }

    > p {
      font-size: calc(24px / 2);
      line-height: calc(40px / 2);
      word-break: keep-all;
    
      > span > font {
        display: block;
      }
    }
  `}
  ${media.mobileS`
    > h1 {
      margin-bottom: 10px;
      font-size: calc(34px / 2);
      line-height: calc(50px / 2);
    }

    > p {
      font-size: calc(24px / 2);
      line-height: calc(40px / 2);
      word-break: keep-all;
    
      > span > font {
        display: block;
      }
    }
  `}
`;