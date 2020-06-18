import React from 'react';
import Fade from 'react-reveal/Fade';

import HelpLineFlow from './HelpLineFlow';

import { Wrap, Label, Block } from './styled';

function MideawillHelplineComponent() {
  return (
    <Wrap>
      <Label>Mideawill HelpLine</Label>
      <div>
        <Fade bottom cascade distance="60px">
          <Block>
            <h1>미디어윌그룹 헬프라인 안내</h1>
            <p>미디어윌그룹 임직원들의 부정·비리·불법·위법행위 등 그룹 경영이념과 사회질서를 저해하는 행위 등에 대하여 제보를 받고 있으며, 제보자 및 제보의 기밀성과 익명성을 보장하기 위하여 독립된 외부 전문회사(레드휘슬)을 통해 위탁 운영되고 있습니다. 헬프라인은 미디어윌그룹 임직원 뿐만 아니라 협력업체 등 누구나 이용할 수 있으며 헬프라인을 이용하여 신고한 후 고유번호와 비밀번호 조회를 통해 헬프라인 담당자와 익명으로 소통 및 처리결과를 확인할 수 있습니다.</p>
            <p>헬프라인은 미디어윌그룹 임직원 뿐만 아니라 협력업체 누구나 이용할 수 있습니다.</p>
          </Block>
        </Fade>
        <HelpLineFlow />
      </div>
    </Wrap>
  )
}

export default MideawillHelplineComponent;