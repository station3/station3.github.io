import React from "react"
import PropTypes from "prop-types"

import Menus from "components/Menus"
import Footer from "components/Footer"

import { GlobalStyle, Body } from './styled'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Menus />
    
    <Body>
      {children}
    </Body>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
