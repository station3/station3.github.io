import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  text-align: center;
`

export const Pro = styled.div`
  margin: 0 auto;
  background: url('/static/images/service/services/pro.svg') center center no-repeat;
  background-size: cover;
  
  ${media.desk1600`
    width: 218px;
    height: 47px;
  `}
  
  ${media.desk1400`
    width: 170px;
    height: 37px;
  `}
  
  ${media.desk1200`
    width: 170px;
    height: 37px;
  `}
  
  ${media.tabletB`
    width: 218px;
    height: 47px;
  `}
  
  ${media.tablet`
    width: 219px;
    height: 48px;
  `}
  
  ${media.mobile`
    width: 109px;
    height: calc(47px / 2);
  `}
  
  ${media.mobileS`
    background-size: contain;
    width: 95px;
    height: 21px;
  `}
`

export const Pay = styled.div`
  margin: 0 auto;
  background: url('/static/images/service/services/pay.svg') center center no-repeat;
  background-size: cover;

  ${media.desk1600`
    width: 213px;
    height: 47px;
  `}
  
  ${media.desk1400`
    width: 166px;
    height: 37px;
  `}
  
  ${media.desk1200`
    width: 166px;
    height: 37px;
  `}
  
  ${media.tabletB`
    width: 213px;
    height: 47px;
  `}
  
  ${media.tablet`
    width: 213px;
    height: 47px;
  `}
  
  ${media.mobile`
    width: calc(213px / 2);
    height: calc(47px / 2);
  `}
  
  ${media.mobileS`
    width: 93px;
    height: 21px;
  `}
`

export const Room = styled.div`
  margin: 0 auto;
  background: url('/static/images/service/services/room.svg') center center no-repeat;
  background-size: cover;

  ${media.desk1600`
    width: 237px;
    height: 48px;
  `}
  
  ${media.desk1400`
    width: 190px;
    height: 38px;
  `}
  
  ${media.desk1200`
    width: 190px;
    height: 38px;
  `}
  
  ${media.tabletB`
    width: 237px;
    height: 48px;
  `}
  
  ${media.tablet`
    width: 237px;
    height: 48px;
  `}
  
  ${media.mobile`
    width: calc(237px / 2);
    height: 24px;
  `}
  
  ${media.mobileS`
    background-size: contain;
    width: calc(214px / 2);
    height: calc(45px / 2);
  `}
`

export const Desc = styled.p`
  ${props => props.type === 'pay' ? `
    margin-top: 0.79em;
    color: #fff;
    ` : `
    margin: 0.79em 0;
    color: #000;
  `};

  line-height: 1.52;
  text-align: center;
  white-space: nowrap;

  ${media.desk1600`
    font-size: 25px;
  `}
  
  ${media.desk1400`
    font-size: 19px;
  `}
  
  ${media.desk1200`
    font-size: 19px;
  `}
  
  ${media.tabletB`
    font-size: 24px;
  `}
  
  ${media.tablet`
    font-size: 24px;
  `}
  
  ${media.mobile`
    font-size: 12px;
  `}
  
  ${media.mobileS`
    font-size: 11px;
  `}
`

export const Link = styled.a`
  display: inline-block;
  color: #000;
  font-weight: 700;
  text-decoration: underline;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
    position: absolute;
    right: -18px;
    top: 6px;
  }

  ${media.desk1600`
    margin-bottom: 30px;
    font-size: 13px;
    line-height: 2.77;

    &::after {
      width: 7px;
      height: 7px;
      right: -13px;
      top: 9px;
    }
  `}
  
  ${media.desk1400`
    margin-bottom: 23px;
    font-size: 10px;
    line-height: 2.77;

    &::after {
      width: 6px;
      height: 6px;
      right: -10px;
      top: 7px;
    }
  `}
  
  ${media.desk1200`
    margin-bottom: 23px;
    font-size: 10px;
    line-height: 2.77;

    &::after {
      width: 6px;
      height: 6px;
      right: -10px;
      top: 7px;
    }
  `}
  
  ${media.tabletB`
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 2;

    &::after {
      width: 12px;
      height: 12px;
      right: -22px;
      top: 6px;
    }
  `}
  
  ${media.tablet`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 2;

    &::after {
      width: 12px;
      height: 12px;
      right: -22px;
      top: 6px;
    }
  `}
  
  ${media.mobile`
    margin-bottom: 20px;
    font-size: 9px;
    line-height: 2;

    &::after {
      width: 6px;
      height: 6px;
      right: -11px;
      top: 4px;
    }
  `}
  
  ${media.mobileS`
    margin-bottom: 17px;
    font-size: 8px;
    line-height: 2;

    &::after {
      width: 5px;
      height: 5px;
      right: -9px;
      top: 3px;
    }
  `}
`

export const ImgWrap = styled.div`
  
`

export const OwnerImage = styled.img`
  display: block;
  ${media.desk1600`
    width: 648px;
    height: 386px;
    margin: 60px auto 0;
  `}
  ${media.desk1400`
    width: 520px;
    height: 308px;
    margin: 47.2px auto 0;
  `}
  ${media.desk1200`
    width: 520px;
    height: 308px;
    margin: 47.2px auto 0;
  `}
  ${media.tabletB`
    width: 580px;
    height: 345px;
    margin: 60px auto 0;
  `}
  ${media.tablet`
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 310px;
    margin: 60px auto 0;
  `}
  ${media.mobile`
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 149px;
    margin: 30px auto 0;
  `}
  ${media.mobileS`
    width: 100%;
    height: 100%;
    max-width: 225px;
    max-height: 134px;
    margin: 30.35px auto 0;
  `}
`
