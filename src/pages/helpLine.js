import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/seo'

import BannerComponent from 'components/HelpLine/Banner'
import Intro from 'components/HelpLine/Intro'
import Mideawill from 'components/HelpLine/MideawillHelpline'
import Report from 'components/HelpLine/Report'

export default () => {
  return (
    <Layout>
      <SEO title="스테이션3 헬프라인" />
      <div className="Wrap">
        <BannerComponent />
        <Intro />
        <Mideawill />
        <Report />
      </div>
    </Layout>
  )
}
