import React from 'react'

import { Banner, Img, Overlay, Title } from './styled'

const BannerComponent = () => {
  return (
    <Banner>
      <Img />
      <Overlay>
        <Title>우리는 사람과 집을 연결하고, 더 나은 삶의 방식을 만듭니다.</Title>
      </Overlay>
    </Banner>
  )
}

export default BannerComponent
