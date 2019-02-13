import React from 'react'
import Fade from 'react-reveal/Fade'

import { 
  Wrap, Label,
  Table, TextWrap,
} from './styled'

const BannerComponent = () => {
  return (
    <Wrap>
      <Table>
        <Label>service</Label>
        <TextWrap>
          <div>
            <Fade bottom cascade distance="60px">
              <div>
                <h1>
                  우리는 세상에 없던 부동산 서비스를 만들어 갑니다.
                </h1>
              </div>
            </Fade>
            <Fade bottom cascade distance="60px">
              <div>
                <p>다방, 다방프로, 다방집주인, 다방페이 등</p>
                <p>다방은 주거공간을 넘어 모두가 ‘더 나은 삶의 방식’을</p>
                <p>만들어 나갈 수 있는 방향을 제시하고 있습니다.</p>
              </div>
            </Fade>
          </div>
        </TextWrap>
      </Table>
    </Wrap>
  )
}

export default BannerComponent
