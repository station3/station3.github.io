import React from 'react'
import { HrLine, Text, Wrap } from './styled'
import Recruiting from './Recruiting'

const RecruitComponent = () => {
  return (
    <Wrap id="recruit">
      <HrLine />
      <Text>
        <p>
          스테이션3에서 일하고 싶으신가요?<br />
          이곳에서 진행중인 채용공고를 확인하세요.
        </p>
        <b>인재풀 등록</b> <span>hr@station3.co.kr</span>
      </Text>
      <Recruiting />
    </Wrap>
  )
}

export default RecruitComponent