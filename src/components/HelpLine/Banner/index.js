import React from 'react'
import Fade from 'react-reveal/Fade'

import { Wrap, Table, Label, TextWrap, Text } from './styled'

const BannerComponent = () => {
  return (
    <Wrap>
      <Table>
        <Label>helpline</Label>
        <TextWrap>
          <div>
            <Fade bottom cascade distance="60px">
              <div>
                <Text>
                  <span>스테이션3는</span> 미디어윌의 ‘기업윤리’ <font>방침에 따라 ‘윤리경영’을</font> 실천하고 있습니다.
                </Text>
              </div>
            </Fade>
          </div>
        </TextWrap>
      </Table>
    </Wrap>
  )
}

export default BannerComponent
