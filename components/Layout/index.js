import React, { Fragment } from 'react'
import { string } from 'prop-types'
import config from 'react-reveal/globals'

import Head from '../Head'
import Menus from '../Menus'
import Footer from '../Footer'

import {
  GlobalStyle,
  Body,
} from './styled'


const LayoutComponent = ({
  title, description, url, ogImage,
  children
}) => {
  config({ ssrReveal: false })

  return (
    <>
      <GlobalStyle />
      <Head 
        title={title}
        description={description}
        url={url}
        ogImage={ogImage} />
      
      <Menus />

      <Body>
        {children}
      </Body>

      <Footer />
    </>
  )
}

Head.LayoutComponent = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default LayoutComponent
