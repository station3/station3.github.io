import styled, { css } from 'styled-components'
import media from 'utils/media'
import { Label as BasicLabel } from '../styled'

export const Wrap = styled.div`
  position: relative;
  ${media.desk1600`
    margin-top: 120px;
  `}
  ${media.desk1400`
    margin-top: 104px;
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
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 90px;
    font-size: 13px;
    line-height: 3.46;
    letter-spacing: 2px;
  `}
  ${media.desk1400`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 80px;
    font-size: 11px;
    line-height: 4.09;
    letter-spacing: 1.7px;
  `}
  ${media.desk1200`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 80px;
    font-size: 11px;
    line-height: 4.09;
    letter-spacing: 1.7px;
  `}
  ${media.tabletB`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.tablet`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 2.5;
    letter-spacing: 2.8px;
  `}
  ${media.mobile`
    margin-bottom: 5px;
    font-size: 9px;
    line-height: 1.25;
    letter-spacing: 1.4px;
  `}
  ${media.mobileS`
    margin-bottom: 6.5px;
    font-size: 8px;
    line-height: 1.25;
    letter-spacing: 1.25px;
  `}
`
