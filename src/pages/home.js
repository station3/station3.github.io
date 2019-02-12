import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Banner from 'components/Home/Banner'
import WhoWeAre from 'components/Home/WhoWeAre'
import History from 'components/Home/History'
import Message from 'components/Home/Message'
import Download from 'components/Home/Download'
import Contact from 'components/Home/Contact'

export default () => {
  return (
    <Layout>
      <SEO title="스테이션3 소개" />
      <div className="Wrap">
        <Banner />
        <WhoWeAre />
      </div>
      <History />
      <div className="Wrap">
        <Message />
        <Download />
        <Contact />
      </div>
    </Layout>
  )
}
