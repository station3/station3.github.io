import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  width: 100%;

  ${media.desk1600`
    display: flex;
  `}
  
  ${media.desk1400`
    display: flex;
  `}
  
  ${media.desk1200`
    display: flex;
  `}
  
  ${media.tabletB`
    
  `}
  
  ${media.tablet`
    
  `}
  
  ${media.mobile`
    
  `}
  
  ${media.mobileS`
    
  `}
`

const Card = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media.desk1600`
    flex: 1;
    width: 50%;
    padding-bottom: calc(95% / 2);
  `}
  
  ${media.desk1400`
    flex: 1;
    width: 50%;
    padding-bottom: calc(95% / 2);
  `}
  
  ${media.desk1200`
    flex: 1;
    width: 50%;
    padding-bottom: calc(95% / 2);
  `}
  
  ${media.tabletB`
    width: 100%;
    padding-bottom: 95%;
  `}
  
  ${media.tablet`
    width: 100%;
    padding-bottom: 95%;
  `}
  
  ${media.mobile`
    width: 100%;
    padding-bottom: 95%;
  `}
  
  ${media.mobileS`
    width: 100%;
    padding-bottom: 95%;
  `}

`

export const ProCard = styled(Card)`
  &::before {
    background: url('/static/images/service/services/pro_bg.png') center center no-repeat;
    background-size: cover;
  }

  > div {
    position: absolute;
    top: 12.5%;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const PayCard = styled(Card)`
  &::before {
    background: url('/static/images/service/services/pay_bg.svg') center center no-repeat;
    background-size: cover;
  }

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const RoomOwnerCard = styled.div`
  ${media.desk1600`
    margin-top: 130px;
    margin-bottom: 180px;
  `}
  ${media.desk1400`
    margin-top: 100px;
    margin-bottom: 149px;
  `}
  ${media.desk1200`
    margin-top: 100px;
    margin-bottom: 149px;
  `} 
  ${media.tabletB`
    margin-top: 130px;
    margin-bottom: 150px;
  `} 
  ${media.tablet`
    margin-top: 100px;
    margin-bottom: 150px;
  `}
  ${media.mobile`
    margin-top: 50px;
    margin-bottom: 75px;
  `}
  ${media.mobileS`
    margin-top: 40.3px;
    margin-bottom: 75px;
  `}
`