import React from 'react'
import Layout from 'components/Layout'

import Banner from './Banner'
import AppDownload from './AppDownload'
import DabangServices from './DabangServices'

const Service = () => (
  <Layout title="스테이션3 서비스">
    <div className="Wrap">
      <Banner />
      <AppDownload />
      <DabangServices />
    </div>
  </Layout>
)

export default Service
