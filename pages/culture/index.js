import React from 'react'
import Layout from 'components/Layout'

import BannerComponent from './Banner'
import InterviewWrap from './Interview'
import CoreValueComponent from './CoreValue'
import RecruitComponent from './Recruit'
import PhotoComponent from './Photo'
import BenefitsComponent from './Benefits'

const Culture = () => (
  <Layout title="스테이션3 기업문화">
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

export default Culture
