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
  border-top: 1px solid #d8d8d8;

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
    top: 90px;
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
    margin-bottom: 3px;
    font-size: 9px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
  
  ${media.mobileS`
    margin-bottom: 2px;
    font-size: 8px;
    line-height: 22.5px;
    letter-spacing: 1.4px;
  `}
`

export const Title = styled.h1`
  margin-bottom: 60px;
  color: #000;
  font-size: 34px;
  line-height: 50px;

  ${media.mobile`
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 25px;
  `}
  
  ${media.mobileS`
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 25px;
  `}
`

export const Map = styled.div`
  width: 100%;

  ${media.desk1600`
    height: 602px;
    margin-bottom: 80px;
  `}

  ${media.desk1400`
    height: 552px;
    margin-bottom: 60px;
  `}

  ${media.desk1200`
    height: 497px;
    margin-bottom: 56px;
  `}

  ${media.tabletB`
    height: 602px;
    margin-bottom: 60px;
  `}

  ${media.tablet`
    height: 602px;
    margin-bottom: 60px;
  `}

  ${media.mobile`
    height: 300px;
    margin-bottom: 35px;
  `}

  ${media.mobileS`
    height: 250px;
    margin-bottom: 35px;
  `}
`

export const List = styled.ul`

  ${media.desk1600`
    margin-bottom: 60px;
    ${Clearfix}
  `}

  ${media.desk1400`
    margin-bottom: 60px;
    ${Clearfix}
  `}
  
  ${media.desk1200`
    margin-bottom: 60px;
    ${Clearfix}
  `}

  ${media.tabletB`
    margin-bottom: 20px;
  `}

  ${media.tablet`
    margin-bottom: 20px;
  `}
`

export const Contact = styled.li`
  > h1,
  > p {
    color: #000;
    > span {
      font-weight: 700;
    }
  }

  ${media.desk1600`
    float: left;
    width: 33.3333%;

    > h1 {
      margin-bottom: 13px;
      font-size: 20px;
      line-height: 35px;
    }

    > p {
      font-size: 16px;
      line-height: 35px;

      > span {
        margin-right: 10px;
      }
    }
  `}

  ${media.desk1400`
    float: left;
    width: 33.3333%;

    > h1 {
      margin-bottom: 13px;
      font-size: 20px;
      line-height: 35px;
    }

    > p {
      font-size: 14px;
      line-height: 30px;

      > span {
        margin-right: 10px;
      }
    }
  `}

  ${media.desk1200`
    float: left;
    width: 33.3333%;

    > h1 {
      margin-bottom: 13px;
      font-size: 20px;
      line-height: 35px;
    }

    > p {
      font-size: 14px;
      line-height: 30px;

      > span {
        margin-right: 10px;
      }
    }
  `}

  ${media.tabletB`
    > h1 {
      margin-bottom: 14px;
      font-size: 28px;
      line-height: 35px;
    }

    > p {
      font-size: 24px;
      line-height: 50px;

      > span {
        margin-right: 10px;
      }
    }

    & + li {
      margin-top: 60px;
    }
  `}

  ${media.tablet`
    > h1 {
      margin-bottom: 14px;
      font-size: 28px;
      line-height: 35px;
    }

    > p {
      font-size: 24px;
      line-height: 50px;

      > span {
        margin-right: 10px;
      }
    }

    & + li {
      margin-top: 60px;
    }
  `}

  ${media.mobile`
    > h1 {
      margin-bottom: 7px;
      font-size: 14px;
      line-height: 17.5px;
    }

    > p {
      font-size: 12px;
      line-height: 25px;

      > span {
        margin-right: 10px;
      }
    }

    & + li {
      margin-top: 30px;
    }
  `}

  ${media.mobileS`
    > h1 {
      margin-bottom: 7px;
      font-size: 14px;
      line-height: 17.5px;
    }

    > p {
      font-size: 12px;
      line-height: 25px;

      > span {
        margin-right: 10px;
      }
    }

    & + li {
      margin-top: 30px;
    }
  `}
`