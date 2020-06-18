import React from 'react'
import Fade from 'react-reveal/Fade'
import {
  Wrap, Label, 
  BenefitList, Benefit, ReportWrap, ReportChild, 
  Link, QRCode } from './styled'

const BenefitsComponent = () => {
  return (
    <Wrap>
      <Label>Report</Label>
      <BenefitList>
        <Benefit>
          <p>신고대상</p>
          <Fade bottom cascade distance="60px">
            <ul>
              <li>임직원의 공금횡령, 유용, 배임행위</li>
              <li>부정청탁 및 금품 등 수수의 금지에</li>
              <li>성희롱, 성폭력, 직장내 괴롭힘 행위</li>
              <li>회사 경영정보, 영업기밀 유출 등 정보보안 위반 행위</li>
              <li>기타 불법, 탈법행위, 불공정 거래행위, 차별(부당) 행위 등</li>
            </ul>
          </Fade>
        </Benefit>

        <Benefit>
          <p>신고방법</p>
          <Fade bottom cascade distance="60px">
            <ReportWrap>
              <h2>1. 실명신고</h2>
              <p>전자메일: auditor@mediawill.com</p>
              <div>
                <p>주소: 서울시 서초구 서초대로301 동익성봉빌딩 12층, </p>
                <p>(주)미디어윌 홀딩스 경영진단실</p>
              </div>
              <p>Fax: 02-3019-6346</p>
            </ReportWrap>
          </Fade>

          <Fade bottom cascade distance="60px">
            <ReportWrap>
              <h2>2. 익명신고</h2>
              <p>익명신고는 (주)레드휘슬 헬프라인을 통해 제보할 수 있습니다.</p>
            </ReportWrap>
          </Fade>
          
          <Fade bottom cascade distance="60px">
            <ReportChild>
              <h2>PC로 접속하기</h2>
              <Link href="https://www.redwhistle.org/report/report.asp?organ=7973&RType=1" target="_blank" rel="noopener noreferrer">
                부정/비리 행위 관련 익명신고 바로가기
              </Link>
              <Link href="https://www.redwhistle.org/report/report.asp?organ=7977&RType=1" target="_blank" rel="noopener noreferrer">
                성희롱/성폭력/직장내 괴롭힘 관련 익명신고 바로가기
              </Link>
            </ReportChild>
          </Fade>
          
          <Fade bottom cascade distance="60px">
            <ReportChild>
              <h2>Mobile 앱으로 접속하기</h2>
              <p>1. 구글 Play 스토어 “미디어윌그룹 헬프라인” 검색 후 앱 설치</p>
              <p>2. 앱 실행 후 “바로가기” 클릭</p>
              <p>3. 미디어윌그룹 [부정/비리행위 신고센터] 클릭</p>
              <p><font>*iOS는 현재 지원되지 않습니다.</font></p>
            </ReportChild>
          </Fade>
          
          <Fade bottom cascade distance="60px">
            <ReportChild>
              <h2>QR코드로 접속하기</h2>
              <QRCode />
            </ReportChild>
          </Fade>
        </Benefit>

        <Benefit>
          <p>제보자 신분보장 및 <span>비밀유지</span></p>
          <Fade bottom cascade distance="60px">
            <div>
              <ReportWrap>
                <p>헬프라인은 IP추적차단 시스템이 적용되어 로그파일이 생성되지 않아 사용자를 추적할 수 없으며, 제보내용은 전체가 암호화 되어 철저한 익명성을 보장합니다.</p>
                <p>제보자의 신분 및 신고내용 노출을 가능하게 하는 어떠한 행위(제보자 색출 행위 포함)도 처벌의 대상이 됩니다. 실명신고 또한 제보 접수 및 처리 담당의 최소화, 담당자의 보안유지 서약을 통해 제보자 및 제보내용을 철저히 보호합니다.</p>
              </ReportWrap>
            </div>
          </Fade>
        </Benefit>
      </BenefitList>
    </Wrap>
  )
}

export default BenefitsComponent;
