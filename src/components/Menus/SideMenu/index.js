import React from 'react'
import { Link as GatsbyLink } from "gatsby"

import withController from './Controller'
import { NAVER, INSTAGRAM, FACEBOOK } from 'utils/config'

import Portal from 'utils/portal'

import { 
  OpenBtn, 
  Overlay, Header, CloseBtn,
  Wrap, Menus, 
  Footer, Label, SNS, Text,
} from './styled'

const Link = ({ children, to, activeClassName, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  } else {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }
}

const SideMenuComponent = ({
  LogoIcon, links,
  isOpen, 
  menuHandler
}) => {
  return [
    <OpenBtn key="0" onClick={menuHandler}>
      <svg viewBox="0 0 38 22">
        <g fill="#000" fillRule="evenodd">
          <path d="M0 0h38v2H0zM0 10h38v2H0zM0 20h38v2H0z"/>
        </g>
      </svg>
    </OpenBtn>,
    isOpen && <Portal 
      key="1" 
      handle={menuHandler}>

      <Overlay>
        <Header>
          <LogoIcon isOpen={isOpen} />

          <CloseBtn onClick={menuHandler}>
            <svg viewBox="0 0 32 32">
              <path fill="#FFF" fillRule="evenodd" d="M31.434 2.314L29.684.566 16 14.252 2.314.566.566 2.314 14.25 16 .566 29.686l1.748 1.748L16 17.748l13.685 13.686 1.75-1.748L17.747 16 31.434 2.314z"/>
            </svg>
          </CloseBtn>
        </Header>

        <Wrap>
          <Menus>
            <ul>
              <li>
                <Link to="/">스테이션3 소개</Link>
              </li>
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </Menus>

          <Footer>
            <Label>follow us</Label>

            <SNS>
              <li>
                <Link to={NAVER} target="_blank" rel="noreferrer noopener">
                  <svg viewBox="0 0 48 48">
                    <g fill="none" fillRule="evenodd">
                      <rect width="48" height="48" fill="#FFF" opacity=".7" rx="6.72"/>
                      <path fill="#222" d="M36.121 36.507V12.279h-7.666v12.378l-8.983-12.378h-7.193v24.228h8.08V24.393l8.096 12.114z"/>
                    </g>
                  </svg>
                </Link>
              </li>

              <li>
                <Link to={FACEBOOK} target="_blank" rel="noreferrer noopener">
                  <svg viewBox="0 0 43 43">
                    <path fill="#FFF" fillRule="evenodd" d="M5.375 0A5.384 5.384 0 0 0 0 5.375v32.25A5.384 5.384 0 0 0 5.375 43H21.5V28.219h-5.375V21.5H21.5v-5.375a8.065 8.065 0 0 1 8.063-8.063h5.375v6.72H32.25c-1.48 0-2.688-.138-2.688 1.343V21.5h6.72l-2.688 6.719h-4.032V43h8.063A5.384 5.384 0 0 0 43 37.625V5.375A5.384 5.384 0 0 0 37.625 0H5.375z" opacity=".7"/>
                  </svg>
                </Link>
              </li>

              <li>
                <Link to={INSTAGRAM} target="_blank" rel="noreferrer noopener">
                  <svg viewBox="0 0 43 43">
                    <g fill="none" fillRule="evenodd">
                      <path fill="#FFF" d="M38.969 29.563c0 5.186-4.22 9.406-9.407 9.406H13.438c-5.186 0-9.406-4.22-9.406-9.407V13.438c0-5.186 4.22-9.406 9.407-9.406h16.124c5.187 0 9.407 4.22 9.407 9.407v16.124zM29.562 0H13.438C6.016 0 0 6.015 0 13.438v16.124C0 36.986 6.015 43 13.438 43h16.124C36.986 43 43 36.985 43 29.562V13.438C43 6.016 36.985 0 29.562 0z" opacity=".7"/>
                      <path fill="#CCC" d="M21.5 28.219a6.725 6.725 0 0 1-6.719-6.719 6.725 6.725 0 0 1 6.719-6.719 6.725 6.725 0 0 1 6.719 6.719 6.725 6.725 0 0 1-6.719 6.719m0-17.469A10.744 10.744 0 0 0 10.75 21.5c0 5.942 4.808 10.75 10.75 10.75s10.75-4.808 10.75-10.75-4.808-10.75-10.75-10.75M34.042 10.743a1.792 1.792 0 1 1 0 0"/>
                    </g>
                  </svg>
                </Link>
              </li>
            </SNS>

            <Text>Copyright(c) 2014-2018 Station3,Inc.</Text>
            <Text>All rights reserved.</Text>
          </Footer>
        </Wrap>
      </Overlay>

    </Portal>
  ]
}

export default withController(SideMenuComponent)