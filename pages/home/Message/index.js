import React from 'react'
import Fade from 'react-reveal/Fade'

import { 
  Wrap, Label, CeoImg,
  Table, TextWrap,
} from './styled'

const MessageComponent = () => {
  return (
    <Wrap>
      <Label>ceo message</Label>
      <CeoImg />

      <Table>
        <TextWrap>
          <Fade bottom cascade distance="60px">
            <div>
              <h1>
                사람과 집이 서로 만날 때 비로소 삶이 만들어집니다.
              </h1>
            </div>
          </Fade>
          <Fade bottom cascade distance="60px">
            <div>
              <p>
                우리는 핵심 가치의 토대 위에 ‘더 나은 삶의 방식’이라는 
                키워드를 결합시켜 ‘다방’의 아이덴티티를 한 평 더
                확장시키려고 합니다.&nbsp;
                <br className="d__view" />
                <br className="tb__view" />
                앞으로 다방은 단순히 방을 찾아 계약하는 과정에서 나아가
                임대인과 임차인, 공인중개사 모두가 상생하는 주거 플랫폼이
                될 때까지 끊임없는 고민과 도전을 거듭할 것입니다.
              </p>
            </div>
          </Fade>
        </TextWrap>
      </Table>
    </Wrap>
  )
}

export default MessageComponent
