import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'

import media from 'utils/media'

const Clearfix = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const Wrap = styled.div`
  position: relative;

  ${media.desk1600`
    padding: 0 80px;
    padding-bottom: 50px;
  `}
  
  ${media.desk1400`
    padding: 0 80px;
    padding-bottom: 50px;
  `}
  
  ${media.desk1200`
    padding: 0 80px;
    padding-bottom: 50px;
  `}
  
  ${media.tabletB`
    padding-bottom: 130px;
  `}
  
  ${media.tablet`
    padding-bottom: 130px;
  `}
  
  ${media.mobile`
    padding-bottom: 75px;
  `}
  
  ${media.mobileS`
    padding-bottom: 75px;
  `}
`

export const Content = styled.div`
  position: relative;
  overflow: hidden;

  ${media.desk1600`
    padding-left: 247px;
  `}

  ${media.desk1400`
    padding-left: 186px;
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
    top: 80px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}

  ${media.desk1400`
    font-size: 11px;
    line-height: 40px;
    letter-spacing: 2px;
    position: absolute;
    top: 70px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}

  ${media.desk1200`
    font-size: 11px;
    line-height: 40px;
    letter-spacing: 2px;
    position: absolute;
    top: 70px;
    left: 0;
    transform: rotate(-90deg);
    transform-origin: top left;
  `}

  ${media.tabletB`
    padding: 0 60px;
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
    padding: 0 20px;
    margin-bottom: 20px;
    font-size: 9px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}

  ${media.mobileS`
    padding: 0 15px;
    margin-bottom: 20px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.25px;
  `}
`

export const List = styled.ul`
  width: 100%;
  
  ${Clearfix}

  ${media.tabletB`
    padding: 0 60px;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `}

  ${media.tablet`
    padding: 0 60px;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `}
  
  ${media.mobile`
    padding: 0 20px;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `}

  ${media.mobileS`
    padding: 0 15px;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `}
`

export const History = styled.li`
  display: inline-block;
  padding-right: 20px;

  > h1 {
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 15px;
    margin-bottom: 25px;
    color: ${props => props.color};
    border-color: ${props => props.color};
  }

  > table {
    width: 100%;

    th {
      font-weight: 700;
    }
    
    td {
      word-break: keep-all;
      white-space: pre-wrap;
    }
  }

  ${media.desk1600`
    width: 33.3333%;
    padding-bottom: 80px;
    
    > h1 {
      font-size: 60px;
      line-height: 60px;
      letter-spacing: -6px;
      border-bottom: 4px solid;
    }

    > table {
      width: 100%;

      th {
        width: 53px;
        font-size: 16px;
      }
      
      td {
        width: calc(100% - 53px);
        padding: 3px 0;
        font-size: 16px;
        line-height: 30px;
      }
    }
  `}

  ${media.desk1400`
    width: 33.3333%;
    padding-bottom: 80px;
    padding-right: 10px;

    > h1 {
      font-size: 54px;
      line-height: 54px;
      letter-spacing: -5.4px;
      border-bottom: 4px solid;
    }

    > table {
      width: 100%;

      th {
        width: 50px;
        font-size: 14px;
      }
      
      td {
        width: calc(100% - 50px);
        padding: 2px 0;
        font-size: 14px;
        line-height: 26px;
      }
    }
  `}
  
  ${media.desk1200`
    width: 33.3333%;
    padding-bottom: 80px;
    padding-right: 10px;

    > h1 {
      font-size: 54px;
      line-height: 54px;
      letter-spacing: -5.4px;
      border-bottom: 3px solid;
    }

    > table {
      width: 100%;

      th {
        width: 50px;
        font-size: 14px;
      }
      
      td {
        width: calc(100% - 50px);
        padding: 2px 0;
        font-size: 14px;
        line-height: 26px;
      }
    }
  `}

  ${media.tabletB`
    width: 500px;
    max-width: 407px;
    padding-right: 0;
    margin-right: 90px;

    > h1 {
      margin-bottom: 30px;
      font-size: 60px;
      line-height: 60px;
      border-bottom: 4px solid;
    }

    > table {
      width: 100%;

      th {
        width: 70px;
        font-size: 24px;
      }
      
      td {
        width: calc(100% - 70px);
        padding: 6px 0;
        font-size: 24px;
        line-height: 38px;
      }
    }
  `}
  
  ${media.tablet`
    width: 500px;
    max-width: 407px;
    > h1 {
      margin-bottom: 30px;
      font-size: 60px;
      line-height: 60px;
      border-bottom: 4px solid;
    }

    > table {
      width: 100%;

      th {
        width: 70px;
        font-size: 24px;
      }
      
      td {
        width: calc(100% - 70px);
        padding: 6px 0;
        font-size: 24px;
        line-height: 38px;
      }
    }
  `}
  
  ${media.mobile`
    width: 250px;
    max-width: 203.5px;

    > h1 {
      margin-bottom: 30px;
      padding-bottom: calc(15px / 2);
      padding-right: 5px;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -3px;
      border-bottom: 2px solid;
    }

    > table {
      width: 100%;

      th {
        width: 35px;
        font-size: 12px;
      }
      
      td {
        width: calc(100% - 35px);
        padding: 3px 0;
        font-size: 12px;
        line-height: 19px;
      }
    }
  `}

  ${media.mobileS`
    width: 250px;

    > h1 {
      margin-bottom: 12px;
      padding-bottom: calc(15px / 2);
      padding-right: 4px;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -3px;
      border-bottom: 2px solid;
    }

    > table {
      width: 100%;

      th {
        width: 35px;
        font-size: 12px;
      }
      
      td {
        width: calc(100% - 35px);
        padding: 3px 0;
        font-size: 12px;
        line-height: 19px;
      }
    }
  `}
`

export const Table = withReveal(styled.table`

`, <Fade bottom cascade distance="40px" />)