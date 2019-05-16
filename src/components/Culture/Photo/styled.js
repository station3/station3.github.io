import styled from 'styled-components'
import media from 'utils/media'

export const Wrap = styled.div`
  ${media.desk1600`
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
  position: relative;
  display: inline-block;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${media.desk1600`
    // width: calc((99.9% - 30px) / 6);
    width: calc(16.6666% - 5px);
    padding-top: 16.6666%;
    &:nth-child(n + 2) {
      margin-left: 6px;
    }
  `}
  ${media.desk1200`
    // width: calc((99.9% - 15px) / 6);
    width: calc(16.6666% - 2.5px);
    padding-top: 16.6666%;
    &:nth-child(n + 2) {
      margin-left: 3px;
    }
  `}
  ${media.tabletB`
    // width: calc((99.9% - 22px) / 3);
    width: calc(33.3333% - 7.4px);
    padding-top: 33.3333%;
    &:nth-child(3n + 2) {
      margin-left: 11px;
      margin-right: 11px;
    }
    &:nth-child(n + 4) {
      margin-top: 11px;
    }
  `}
  ${media.tablet`
    // width: calc((99.9% - 16px) / 3);
    width: calc(33.3333% - 5.4px);
    padding-top: 33.3333%;
    &:nth-child(3n + 2) {
      margin-left: 8px;
      margin-right: 8px;
    }
    &:nth-child(n + 4) {
      margin-top: 8px;
    }
  `}
  ${media.mobile`
    // width: calc((99.9% - 8px) / 3);
    width: calc(33.3333% - 2.7px);
    padding-top: 33.3333%;
    &:nth-child(3n + 2) {
      margin-left: 4px;
      margin-right: 4px;
    }
    &:nth-child(n + 4) {
      margin-top: 4px;
    }
  `}
  ${media.mobileS`
    // width: calc((99.9% - 6px) / 3);
    width: calc(33.3333% - 2px);
    padding-top: 33.3333%;
    &:nth-child(3n + 2) {
      margin-left: 3px;
      margin-right: 3px;
    }
    &:nth-child(n + 4) {
      margin-top: 3px;
    }
  `}
`
