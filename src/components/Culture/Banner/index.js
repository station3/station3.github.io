import React from 'react'
import Fade from 'react-reveal/Fade'

import { Wrap, Table, TextWrap, Text } from './styled'

const BannerComponent = () => {
  return (
    <Wrap>
      <Table>
        <TextWrap>
          <div>
            <Fade bottom cascade distance="60px">
              <div>
                <Text>
                  도전적인 자세로 변화를 이끄는 사람들이 다방을 만듭니다.
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
