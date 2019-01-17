import styled from 'styled-components'
import media from 'utils/media'

export const Footer = styled.div`
  width: 100%;
  background-color: #000;

  ${media.desk1600`
    height: 212px;
    padding: 0 80px;
  `}

  ${media.desk1400`
    height: 212px;
    padding: 0 80px;
  `}

  ${media.desk1200`
    height: 212px;
    padding: 0 80px;
  `}

  ${media.tabletB`
    height: 807px;
    padding: 0 60px;
    padding-top: 147px;
  `}
  
  ${media.tablet`
    height: 858px;
    padding: 0 40px;
    padding-top: 147px;
  `}
  
  ${media.mobile`
    height: 429px;
    padding: 0 20px;
    padding-top: 74px;
  `}

  ${media.mobileS`
    height: 396px;
    padding: 0 15px;
    padding-top: 74px;
  `}
`

export const Content = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
`

export const Logo = styled.div`
  position: relative;

  ${media.desk1600`
    float: left;
    width: 168px;
    height: 100%;

    > svg {
      width: 168px;
      height: 23px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  `}

  ${media.desk1400`
    float: left;
    width: 134px;
    height: 100%;

    > svg {
      width: 134px;
      height: 18px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  `}

  ${media.desk1200`
    float: left;
    width: 134px;
    height: 100%;

    > svg {
      width: 134px;
      height: 18px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  `}

  ${media.tabletB`
    width: 288px;
    margin-bottom: 57px;

    > svg {
      width: 288px;
      height: 38px;
    }
  `}
  
  ${media.tablet`
    width: 288px;
    margin-bottom: 57px;

    > svg {
      width: 288px;
      height: 38px;
    }
  `}
  
  ${media.mobile`
    width: 144px;
    margin-bottom: 29px;

    > svg {
      width: 144px;
      height: 19px;
    }
  `}

  ${media.mobileS`
    width: 144px;
    margin-bottom: 25px;

    > svg {
      width: 144px;
      height: 19px;
    }
  `}
`

export const Contact = styled.div`
  > div {
    > p {
      color: #999;

      > span {
        margin-right: 10px;

        > font {
          margin-right: 5px;
          font-weight: 700;
        }
      }
    }
  }

  ${media.desk1600`
    float: left;
    display: table;
    height: 100%;
    padding-left: 80px;

    > div {
      display: table-cell;
      vertical-align: middle;

      > p {
        font-size: 14px;
        line-height: 30px;
      }
    }
  `}

  ${media.desk1400`
    float: left;
    display: table;
    height: 100%;
    padding-left: 52px;

    > div {
      display: table-cell;
      vertical-align: middle;

      > p {
        font-size: 12px;
        line-height: 26px;
      }
    }
  `}

  ${media.desk1200`
    float: left;
    display: table;
    height: 100%;
    padding-left: 3%;

    > div {
      display: table-cell;
      vertical-align: middle;

      > p {
        font-size: 12px;
        line-height: 26px;
      }
    }
  `}

  ${media.tabletB`
    > div {
      margin-bottom: 100px;

      > p {
        font-size: 24px;
        line-height: 50px;

        
      }
    }
  `}
  
  ${media.tablet`
    > div {
      margin-bottom: 100px;

      > p {
        font-size: 24px;
        line-height: 50px;

        > .break {
          display: block;
        }
      }
    }
  `}
  
  ${media.mobile`
    > div {
      margin-bottom: 50px;

      > p {
        font-size: 12px;
        line-height: 25px;

        > .break {
          display: block;
        }
      }
    }
  `}

  ${media.mobileS`
    > div {
      margin-bottom: 50px;

      > p {
        font-size: 11px;
        line-height: 20px;

        > .break {
          display: block;
        }
      }
    }
  `}
`

export const SNSWrap = styled.div`

  ${media.desk1600`
    float: right;
    display: table;
    height: 100%;
    padding-left: 80px;

    > ul {
      display: table-cell;
      vertical-align: middle;

      > li {
        float: left;
        line-height: 53px;
        
        > a {
          margin-left: 20px;

          > svg {
            width: 24px;
            height: 24px;
            position: relative;
            top: 5px;
          }
        }
      }
    }
  `}

  ${media.desk1400`
    float: right;
    display: table;
    height: 100%;

    > ul {
      display: table-cell;
      vertical-align: middle;

      > li {
        float: left;
        line-height: 42px;
        
        > a {
          margin-left: 16px;

          > svg {
            width: 19px;
            height: 19px;
            position: relative;
            top: 5px;
          }
        }
      }
    }
  `}

  ${media.desk1200`
    float: right;
    display: table;
    height: 100%;

    > ul {
      display: table-cell;
      vertical-align: middle;

      > li {
        float: left;
        line-height: 42px;
        &:nth-child(n + 2):not(:last-child) {
          margin-left: 16px;
        }
        > a {
          > svg {
            width: 19px;
            height: 19px;
            position: relative;
            top: 5px;
          }
        }
      }
    }
  `}

  ${media.tabletB`
    > ul {
      > li {
        float: left;
        margin-bottom: 40px;
        
        > a {
          margin-right: 32px;

          > svg {
            width: 43px;
            height: 43px;
          }
        }

        &:last-child {
          width: 100%;
          clear: both;
        }
      }
    }
  `}
  
  ${media.tablet`
    > ul {
      > li {
        float: left;
        margin-bottom: 40px;
        
        > a {
          margin-right: 32px;

          > svg {
            width: 43px;
            height: 43px;
          }
        }

        &:last-child {
          width: 100%;
          clear: both;
        }
      }
    }
  `}
  
  ${media.mobile`
    > ul {
      > li {
        float: left;
        margin-bottom: 20px;
        
        > a {
          margin-right: 16px;

          > svg {
            width: 22px;
            height: 22px;
          }
        }

        &:last-child {
          width: 100%;
          clear: both;
        }
      }
    }
  `}

  ${media.mobileS`
    > ul {
      > li {
        float: left;
        margin-bottom: 20px;
        
        > a {
          margin-right: 16px;

          > svg {
            width: 22px;
            height: 22px;
          }
        }

        &:last-child {
          width: 100%;
          clear: both;
        }
      }
    }
  `}
`

export const Select = styled.div`
  position: relative;

  ${media.desk1600`
    width: 263px;
    height: 53px;
    margin-left: 40px;
  `}

  ${media.desk1400`
    width: 263px;
    height: 42px;
    margin-left: 30px;
  `}

  ${media.desk1200`
    width: 210px;
    height: 42px;
    margin-left: 30px;
  `}
  
  ${media.tabletB`
    width: 100%;
    height: 80px;
  `}
  
  ${media.tablet`
    width: 100%;
    height: 80px;
  `}
  
  ${media.mobile`
    width: 100%;
    height: 40px;
  `}
  
  ${media.mobileS`
    width: 100%;
    height: 40px;
  `}
`

export const SelectBtn = styled.div`
  color: #999;
  text-transform: uppercase;
  background-color: #242529;
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  ${media.desk1600`
    width: 100%;
    height: 53px;
    padding: 0 20px;
    font-size: 15px;
    line-height: 53px;

    > svg {
      width: 13px;
      height: 7px;
    }
  `}

  ${media.desk1400`
    width: 100%;
    height: 42px;
    padding: 0 15px;
    font-size: 11px;
    line-height: 42px;

    > svg {
      width: 13px;
      height: 7px;
    }
  `}

  ${media.desk1200`
    width: 100%;
    height: 42px;
    padding: 0 15px;
    font-size: 11px;
    line-height: 42px;

    > svg {
      width: 13px;
      height: 7px;
    }
  `}

  ${media.tabletB`
    width: 100%;
    height: 80px;
    padding: 0 40px;
    font-size: 24px;
    line-height: 80px;

    > svg {
      width: 20px;
      height: 11px;
    }
  `}

  ${media.tablet`
    width: 100%;
    height: 80px;
    padding: 0 40px;
    font-size: 24px;
    line-height: 80px;

    > svg {
      width: 20px;
      height: 11px;
    }
  `}
  
  ${media.mobile`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    font-size: 12px;
    line-height: 40px;

    > svg {
      width: 10px;
      height: 5px;
    }
  `}
  
  ${media.mobileS`
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-size: 12px;
    line-height: 40px;

    > svg {
      width: 10px;
      height: 5px;
    }
  `}
`

export const FamilySite = styled.ul`
  width: 100%;
  background-color: #242529;
  position: absolute;
  left: 0;
  right: 0;

  > li {
    border-bottom: 1px solid #444;

    > a {
      display: block;
      color: #999;
      font-weight: 700;
      letter-spacing: normal;
    }
  }

  ${media.desk1600`
    bottom: 53px;

    > li {
      height: 53px;
      padding: 0 20px;

      > a {
        font-size: 15px;
        line-height: 53px;
      }
    }
  `}

  ${media.desk1400`
    bottom: 42px;
    
    > li {
      height: 42px;
      padding: 0 15px;
      
      > a {
        font-size: 11px;
        line-height: 40px;
      }
    }
  `}

  ${media.desk1200`
    bottom: 42px;

    > li {
      height: 42px;
      padding: 0 15px;

      > a {
        font-size: 11px;
        line-height: 40px;
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
`