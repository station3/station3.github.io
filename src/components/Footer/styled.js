import styled from 'styled-components'
import media from 'utils/media'

export const Footer = styled.div`
  width: 100%;
  background-color: #000;
`

export const Content = styled.div`
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  
  ${media.desk1600`
    padding: 60px 80px;
  `}

  ${media.desk1200`
    padding: 60px 80px;
  `}

  ${media.tabletB`
    padding: 147px 60px 150px;
  `}
  
  ${media.tablet`
    padding: 147px 40px 150px;
  `}
  
  ${media.mobile`
    padding: 75px 20px;
  `}

  ${media.mobileS`
    padding: 75px 15px;
  `}

`

export const TermsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid rgb(41, 41, 41);

  > ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1600px;
    width: 100%;
    height: 100%;

    > li {
      white-space: nowrap;

      > a {
        display: block;
        color: #8f8f8f;
      }
    }
  }


  ${media.desk1600`
    height: 80px;

    > ul {
      padding: 0 80px 0 40px;
      
      > li {
        margin-left: 40px;

        > a {
          font-size: 14px;
          line-height: 30px;
        }
      }
    }
  `}

  ${media.desk1200`
    height: 80px;

    > ul {
      padding: 0 80px 0 40px;

      > li {
        margin-left: 40px;

        > a {
          font-size: 13px;
          line-height: 26px;
        }
      }
    }
  `}

  ${media.tabletB`
    height: 140px;

    > ul {
      padding: 0 60px 0 0;

      > li {
        margin-left: 60px;

        > a {
          font-size: 24px;
          line-height: 50px;
        }
      }
    }
  `}
  
  ${media.tablet`
    height: 120px;

    > ul {
      padding: 10px 60px 10px 20px;
      
      > li {
        margin-left: 40px;
        height: 40px;

        > a {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }
  `}
  
  ${media.mobile`
    height: 60px;

    > ul {
      padding: 0 20px 0 0;

      > li {
        margin-left: 20px;

        > a {
          font-size: 12px;
          line-height: 25px;
        }
      }
    }
  `}

  ${media.mobileS`
    height: 50px;

    > ul {
      padding: 0 15px 0 0;

      > li {
        margin-left: 15px;

        > a {
          font-size: 11px;
          line-height: 20px;
        }
      }
    }
  `}
`;

export const InfoWrap = styled.div`
  display: flex;

  ${media.desk1600`
    align-items: center;
  `}

  ${media.desk1200`
    align-items: center;
  `}

  ${media.tabletB`
    flex-direction: column;
  `}
  
  ${media.tablet`
    flex-direction: column;
  `}
  
  ${media.mobile`
    flex-direction: column;
  `}

  ${media.mobileS`
    flex-direction: column;
  `}
`;

export const Logo = styled.div`
  flex: none;
  position: relative;

  ${media.desk1600`
    > svg {
      width: 168px;
      height: 23px;
    }
  `}

  ${media.desk1200`
    > svg {
      width: 134px;
      height: 18px;
    }
  `}

  ${media.tabletB`
    margin-bottom: 57px;

    > svg {
      width: 288px;
      height: 38px;
    }
  `}
  
  ${media.tablet`
    margin-bottom: 57px;

    > svg {
      width: 288px;
      height: 38px;
    }
  `}
  
  ${media.mobile`
    margin-bottom: 29px;

    > svg {
      width: 144px;
      height: 19px;
    }
  `}

  ${media.mobileS`
    margin-bottom: 25px;

    > svg {
      width: 144px;
      height: 19px;
    }
  `}
`

export const Contact = styled.div`
  flex-grow: 1;

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
    height: 100%;
    padding-left: 80px;

    > div {
      > p {
        font-size: 14px;
        line-height: 30px;
      }
    }
  `}

  ${media.desk1200`
    height: 100%;
    padding-left: 3%;

    > div {
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
  flex: none;

  ${media.desk1600`
    display: flex;
    align-items: center;
 
    > a {
      margin-left: 20px;

      > svg {
        width: 24px;
        height: 24px;
      }
    }
  `}

  ${media.desk1200`
    display: flex;
    align-items: center;

    > a {
      margin-left: 16px;

      > svg {
        width: 19px;
        height: 19px;
      }
    }
  `}

  ${media.tabletB`
    margin-bottom: 40px;
    
    > a {
      margin-right: 32px;

      > svg {
        width: 43px;
        height: 43px;
      }
    }
  `}
  
  ${media.tablet`
    margin-bottom: 40px;
        
    > a {
      margin-right: 32px;

      > svg {
        width: 43px;
        height: 43px;
      }
    }
  `}
  
  ${media.mobile`
    margin-bottom: 20px;
      
    > a {
      margin-right: 16px;

      > svg {
        width: 22px;
        height: 22px;
      }
    }
  `}

  ${media.mobileS`
    margin-bottom: 20px;
    > a {
      margin-right: 16px;

      > svg {
        width: 22px;
        height: 22px;
      }
    }
  `}
`

export const Select = styled.div`
  flex: none;
  position: relative;

  ${media.desk1600`
    width: 263px;
    height: 53px;
    margin-left: 40px;
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