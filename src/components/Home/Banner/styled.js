import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import withReveal from 'react-reveal/withReveal'
import Fade from 'react-reveal/Fade'

import media from 'utils/media'

export const Banner = styled.div`
  width: 100%;
  background-color: #0D0E60;
  position: relative;
  overflow: hidden;

  ${media.desk1600`
    padding-top: 50%;
  `}

  ${media.desk1200`
    padding-top: 50%;
  `}

  ${media.tabletB`
    padding-top: 86.284%;
  `}
  
  ${media.tablet`
    padding-top: 113.372%;
  `}

  ${media.mobile`
    padding-top: 138.0597%;
  `}

  ${media.mobileS`
    padding-top: 138.1034%;
  `}
`

export const Img = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.desk1600`
    background-image: url(${withPrefix('/images/home/banner/1600.jpg')});
  `}

  ${media.desk1200`
    background-image: url(${withPrefix('/images/home/banner/1200.jpg')});
  `}

  ${media.tabletB`
    background-image: url(${withPrefix('/images/home/banner/1000.jpg')});
  `}

  ${media.tablet`
    background-image: url(${withPrefix('/images/home/banner/640.jpg')});
  `}

  ${media.mobile`
    background-image: url(${withPrefix('/images/home/banner/375.jpg')});
  `}

  ${media.mobileS`
    background-image: url(${withPrefix('/images/home/banner/320.jpg')});
  `}
`

export const Overlay = withReveal(styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`, <Fade bottom cascade distance="40px" />)

export const Title = styled.h1`
  color: #fff;
  width: 100%;
  z-index: 3;
  font-weight: 700;
  word-break: keep-all;

  ${media.desk1600`
    margin: 25% 0 0 100px;
    transform: translateY(-50%);
    max-width: 566px;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: -3px;
  `}
  
  ${media.desk1200`
    margin: 25% 0 0 60px;
    max-width: 451px;
    transform: translateY(-50%);
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -2.4px;
  `}

  ${media.tabletB`
    position: absolute;
    left: 60px;
    bottom: 100px;
    max-width: 566px;
    font-size: 50px;
    line-height: 1.5;
    letter-spacing: -3px;
  `}

  ${media.tablet`
    position: absolute;
    left: 50px;
    bottom: 80px;
    width: auto;
    max-width: 550px;
    font-size: 50px;
    line-height: 1.5;
    letter-spacing: -3px;
  `}

  ${media.mobile`
    position: absolute;
    left: 30px;
    bottom: 50px;
    width: auto;
    max-width: 275.5px;
    font-size: 27.5px;
    line-height: 1.5;
    letter-spacing: -1.5px;
  `}

  ${media.mobileS`
    position: absolute;
    left: 20px;
    bottom: 40px;
    width: auto;
    max-width: 247.5px;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -1.3px;
  `}
`
