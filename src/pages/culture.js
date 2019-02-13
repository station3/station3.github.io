import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/seo'

import BannerComponent from 'components/Culture/Banner'
import InterviewWrap from 'components/Culture/Interview'
import CoreValueComponent from 'components/Culture/CoreValue'
import RecruitComponent from 'components/Culture/Recruit'
import PhotoComponent from 'components/Culture/Photo'
import BenefitsComponent from 'components/Culture/Benefits'

export default () => {
  return (
    <Layout>
      <SEO title="스테이션3 기업문화" />
      <div className="Wrap">
        <BannerComponent />
        <InterviewWrap />
        <CoreValueComponent />
        <BenefitsComponent />
        <PhotoComponent />
        <RecruitComponent />
      </div>
    </Layout>
  )
}
