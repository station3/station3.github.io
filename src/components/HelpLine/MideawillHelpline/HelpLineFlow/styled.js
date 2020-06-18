import { withPrefix } from 'gatsby';
import styled, { css } from 'styled-components';
import media from 'utils/media';

export const Wrap = styled.div`
  padding-top: 60px;
  
  > div {
    margin: 0 auto;
  }

  ${media.desk1600`
    padding-left: 247px;
    padding-right: 247px;

    > div {
      width: 688px;
    }
  `}

  ${media.desk1200`
    padding-left: 135px;
    padding-right: 135px;

    > div {
      width: 688px;
    }
  `}

  ${media.tabletB`
    > div {
      width: 688px;
    }
  `}

  ${media.tablet`
    > div {
      max-width: 688px;
      width: 100%;
    }
  `}

  ${media.mobile`
    > div {
      width: 100%;
    }
  `}

  ${media.mobileS`
    > div {
      width: 100%;
    }
  `}
`;

export const HelpLine = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 79.942%;
  background: url(${withPrefix('/images/helpLine/flow/helpline.png')}) center center no-repeat;
  background-size: cover;
`;
