import styled, { css } from 'styled-components'
import media from 'utils/media'

const Clearfix = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`

export const Nav = styled.nav`
  width: 100%;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: background-color 300ms;
  z-index: 10;

  &:hover {
    color: #fff;
    background-color: #000;

    svg {
      path {
        fill: #fff;
        stroke: #fff;
      }
    }
  }
`

export const Wrap = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  ${Clearfix}

  ${media.desk1600`
    height: 80px;
    padding: 0 80px;
  `}

  ${media.desk1200`
    height: 80px;
    padding: 0 80px;
  `}

  ${media.tabletB`
    height: 100px;
    padding: 0 60px;
  `}
  
  ${media.tablet`
    height: 100px;
    padding: 0 60px;
  `}
  
  ${media.mobile`
    height: 50px;
    padding: 0 20px;
  `}

  ${media.mobileS`
    height: 50px;
    padding: 0 10px;
  `}
`

const Link = css`
  color: inherit;
  font-weight: 700;
  letter-spacing: -0.7px;

  ${media.desk1600`
    font-size: 14px;
  `}

  ${media.desk1200`
    font-size: 14px;
  `}

  ${media.tabletB`
    font-size: 18px;
  `}

  ${media.tablet`
    font-size: 18px;
  `}
  
  ${media.mobile`
    font-size: 9px;
  `}
  
  ${media.mobileS`
    font-size: 9px;
  `}
`

export const Ul = styled.ul`
  float: left;

  ${media.desk1600`
    line-height: 80px;

    > li {
      float: left;
      padding: 0 18px;

      > a {
        ${Link}
      }

      &:first-child {
        padding-left: 0;
      }
    }
  `}
  
  ${media.desk1200`
    line-height: 80px;

    > li {
      float: left;
      padding: 0 18px;

      > a {
        ${Link}
      }

      &:first-child {
        padding-left: 0;
      }
    }
  `}

  ${media.tabletB`
    display: none;
  `}
  
  ${media.tablet`
    display: none;
  `}
  
  ${media.mobile`
    display: none;
  `}
  
  ${media.mobileS`
    display: none;
  `}
`

export const Logo = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  path {
    fill: ${props => props.isOpen ? '#fff' : '#000'};
    stroke: ${props => props.isOpen ? '#fff' : '#000'};
  }

  ${media.desk1600`
    width: 130px;
    height: 20px;
  `}

  ${media.desk1200`
    width: 130px;
    height: 20px;
  `}

  ${media.tabletB`
    width: 196px;
    height: 28px;
  `}
  
  ${media.tablet`
    width: 196px;
    height: 28px;
  `}
  
  ${media.mobile`
    width: 98px;
    height: 14px;
  `}
  
  ${media.mobileS`
    width: 98px;
    height: 14px;
  `}
`

export const Recruit = styled.div`
  float: right;
  position: relative;

  > a {
    ${Link}
  }

  &::after {
    content: '';
    border-radius: 50%;
    background-color: #2053D1;
    position: absolute;
    right: 0;
  }

  ${media.desk1600`
    padding-right: 16px;
    line-height: 80px;

    &::after {
      width: 7px;
      height: 7px;
      top: 33px;
    }
  `}

  ${media.desk1200`
    padding-right: 16px;
    line-height: 80px;

    &::after {
      width: 7px;
      height: 7px;
      top: 33px;
    }
  `}

  ${media.tabletB`
    padding-right: 22px;
    line-height: 100px;

    &::after {
      width: 12px;
      height: 12px;
      top: 40px;
    }
  `}
  
  ${media.tablet`
    padding-right: 22px;
    line-height: 100px;

    &::after {
      width: 12px;
      height: 12px;
      top: 40px;
    }
  `}
  
  ${media.mobile`
    padding-right: 11px;
    line-height: 50px;

    &::after {
      width: 6px;
      height: 6px;
      top: 20px;
    }
  `}
  
  ${media.mobileS`
    padding-right: 11px;
    line-height: 50px;

    &::after {
      width: 6px;
      height: 6px;
      top: 20px;
    }
  `}
`