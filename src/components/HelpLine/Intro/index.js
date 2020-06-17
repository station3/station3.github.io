import React from 'react';
import Fade from 'react-reveal/Fade';
import { Wrap, Label, Block } from './styled';

const InterviewWrap = () => {
  return (
    <Wrap>
      <Label>intro</Label>
      <Fade bottom cascade distance="60px">
        <Block>
          <p>
            <span><font className="tabletB">“미디어윌그룹은 인류에 봉사하는 회사라는</font> 그룹 이념을 근간으로 </span>
            <span>고객, 협력사, 임직원, 지역사회와 함께 성장해 나가고자 하며, </span>
            <span>건전하고 투명한 기업경영을 위해 <font>최선을 다하고 있습니다.”</font></span>
          </p>
        </Block>
      </Fade>
    </Wrap>
  )
}

export default InterviewWrap