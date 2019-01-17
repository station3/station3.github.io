import styled, { css } from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  ${media.desk1600`
    margin-top: 80px;
  `}
  ${media.desk1400`
    margin-top: 80px;
  `}
  ${media.desk1200`
    margin-top: 80px;
  `}
  ${media.tabletB`
    margin-top: 100px;
  `}
  ${media.tablet`
    margin-top: 100px;
  `}
  ${media.mobile`
    margin-top: 50px;
  `}
  ${media.mobileS`
    margin-top: 50px;
  `}
`

export const PhotoList = styled.div`
  font-size: 0;
`

export const Photo = styled.div`
  display: inline-block;
  img {
    width: 100%;
  }
  ${media.desk1600`
    width: calc((100% - 30px) / 6);
    &:nth-child(n + 2) {
      margin-left: 6px;
    }
  `}
  ${media.desk1400`
    width: calc((100% - 15px) / 6);
    &:nth-child(n + 2) {
      margin-left: 3px;
    }
  `}
  ${media.desk1200`
    width: calc((100% - 15px) / 6);
    &:nth-child(n + 2) {
      margin-left: 3px;
    }
  `}
  ${media.tabletB`
    width: calc((100% - 22px) / 3);
    &:nth-child(3n + 2) {
      margin-left: 11px;
      margin-right: 11px;
    }
    &:nth-child(n + 4) {
      margin-top: 11px;
    }
  `}
  ${media.tablet`
    width: calc((100% - 16px) / 3);
    &:nth-child(3n + 2) {
      margin-left: 8px;
      margin-right: 8px;
    }
    &:nth-child(n + 4) {
      margin-top: 8px;
    }
  `}
  ${media.mobile`
    width: calc((100% - 8px) / 3);
    &:nth-child(3n + 2) {
      margin-left: 4px;
      margin-right: 4px;
    }
    &:nth-child(n + 4) {
      margin-top: 4px;
    }
  `}
  ${media.mobileS`
    width: calc((100% - 6px) / 3);
    &:nth-child(3n + 2) {
      margin-left: 3px;
      margin-right: 3px;
    }
    &:nth-child(n + 4) {
      margin-top: 3px;
    }
  `}
`
