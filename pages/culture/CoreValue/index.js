import React from 'react'
import Fade from 'react-reveal/Fade'

import { Circle, CircleWrap, CircleOverlay, Label, Text, Wrap } from './styled'

const CoreValueComponent = () => {
  return (
    <Wrap>
      <Label>core value</Label>
      <CircleWrap>
        <Fade cascade bottom distance="60px">
          <div>
            <Circle color="25, 113, 254">
              <CircleOverlay>
                <div>
                  <label>주도와 실행</label>
                  <p>
                    주인의식을 바탕으로<br/>
                    명확한 의견과 논리를 가지고<br/>
                    진취적으로 일하며,<br/>
                    이를 통해 책임있게 목표를<br/>
                    달성합니다.
                  </p>
                </div>
              </CircleOverlay>
            </Circle>
            <Circle color="88, 59, 228">
              <CircleOverlay>
                <div>
                  <label>투명과 신뢰</label>
                  <p>
                    고객에겐 투명하고,<br />
                    스스로에겐 정직한 신뢰를<br />
                    바탕으로 고객과 함께<br />
                    상생∙발전합니다.
                  </p>
                </div>
              </CircleOverlay>
            </Circle>
            <Circle color="37, 70, 180">
              <CircleOverlay>
                <div>
                  <label>소통과 유연</label>
                  <p>
                    나이, 직급을 떠나 상호 존중하며,<br />
                    충분한 휴식도 업무의 일부라는<br />
                    기조를 바탕으로 일할 땐 일하고 쉴 땐<br />
                    확실히 쉬는, 유연한 기업문화를<br />
                    만들어갑니다.
                  </p>
                </div>
              </CircleOverlay>
            </Circle>
          </div>
        </Fade>
        <Fade bottom distance="60px" delay={100}>
          <Text>
            스테이션3는 ‘주도와 실행’, ‘투명과 신뢰’, ‘소통과 유연’ 핵심 가치를 바탕으로 자유로운 분위기 속에 직원과 함께하고, 고객과 같이 성장하는 ‘다방’을 만들어갑니다.
          </Text>
        </Fade>
      </CircleWrap>
    </Wrap>
  )
}

export default CoreValueComponent