import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/seo'
import Banner from 'components/Service/Banner'
import AppDownload from 'components/Service/AppDownload'
import DabangServices from 'components/Service/DabangServices'

export default () => {
  return (
    <Layout>
      <SEO title="스테이션3 서비스" />
      <div className="Wrap">
        <Banner />
        <AppDownload />
        <DabangServices />
      </div>
    </Layout>
  )
}
