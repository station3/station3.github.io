import React from 'react'
import Layout from 'components/Layout'

import Banner from './Banner'
import WhoWeAre from './WhoWeAre'
import History from './History'
import Message from './Message'
import Download from './Download'
import Contant from './Contant'

const Home = () => (
  <Layout title="스테이션3 소개">
    <div className="Wrap">
      <Banner />
      <WhoWeAre />
    </div>
    
    <History />

    <div className="Wrap">
      <Message />
      <Download />
      <Contant />
    </div>
  </Layout>
)

export default Home
