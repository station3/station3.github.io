import React from 'react'

import {
  Wrap, Content, Label, Title,
  CardWrap, Mission, Vision,
} from './styled'

const WhoWeAreComponent = () => {
  return (
    <Wrap>
      <Content>
        <Label>who we are</Label>

        <Title>
          모바일 부동산 시장에서 임차인과 임대인, 중개인 등 부동산 거래 주체들을 유기적으로 잇는 정확하고 편리하며, 신속한 통합 주거 플랫폼을 구축하겠습니다.
        </Title>
        
        <CardWrap>
          <Mission>
            <h1>mission</h1>
            <p>
              사람과 집을 연결하고, 더 나은 삶의 방식을 만듭니다.
            </p>
          </Mission>

          <Vision>
            <h1>vision</h1>
            <p>
              고객에게  투명하고, 편리한, 합리적인 경험을 제공하는 통합 주거 플랫폼으로 확장
            </p>
          </Vision>
        </CardWrap>
      </Content>
    </Wrap>
  )
}

export default WhoWeAreComponent
