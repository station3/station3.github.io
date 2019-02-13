import React from 'react'

import {
  Wrap, Content, TextWrap, DownloadBtn,
} from './styled'

const DownloadComponent = () => {
  return (
    <Wrap>
      <Content>
        <TextWrap>
          <p>스테이션3를 더 자세히 알고 싶으신가요?</p>
          <p>이곳에서 회사소개서를 다운받으세요.</p>
        </TextWrap>

        <DownloadBtn onClick={e => alert('서비스 준비중 입니다.')}>
          <span>회사소개서 다운로드</span>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path fill="#FFF" fillRule="evenodd" d="M14.94 7.392l-1.348-1.454L11 8.366V0H9v8.366L6.456 5.938 5.094 7.392l4.948 4.671 4.898-4.671zM20 20H0V10h4v2H2v6h16v-6h-2v-2h4v10z"/>
          </svg>
        </DownloadBtn>
      </Content>
    </Wrap>
  )
}

export default DownloadComponent