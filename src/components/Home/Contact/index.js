import React from 'react'
import Fade from 'react-reveal/Fade'
import Map from './Map'

import {
  Wrap, Content, Label, Title,
  List, Contact,
} from './styled'

const ContactComponent = () => {
  return (
    <Wrap>
      <Content>
        <Label>contact</Label>
        <Title>스테이션3 본사</Title>

        <Map />

        <List>
          <Contact>
            <Fade bottom distance="60px">
              <h1>주소</h1>
              <p>서울시 서초구 서초대로 301 동익성봉빌딩 10층</p>
            </Fade>
          </Contact>

          <Contact>
            <Fade bottom distance="60px">
              <h1>연락처</h1>
              <p>
                <span>전화</span>1899-6840
              </p>
              <p>
                <span>팩스</span>02-554-9774
              </p>
              <p>
                <span>이메일</span>hello@station3.co.kr
              </p>
              <p>
                <span>광고,제휴</span>biz@station3.co.kr
              </p>
            </Fade>
          </Contact>

          <Contact>
            <Fade bottom distance="60px">
              <h1>대중교통 이용안내</h1>
              <p>
                <span>지하철</span>교대역 7번 출구
              </p>
              <p>
                <span>버스</span>간선: 740, 144, 541
              </p>
              <p>마을: 서초02, 서초10</p>
              <p>직행: 3200, 9100</p>
            </Fade>
          </Contact>
        </List>
      </Content>
    </Wrap>
  )
}

export default ContactComponent
