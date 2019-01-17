import React from 'react'

import { 
  Wrap, AppImg, TextWrap, Logo,
} from './styled'
import AppBtn from 'components/AppBtn'

const AppDownloadComponent = () => {
  return (
    <Wrap>
      <AppImg />
      <TextWrap>
        <div>
          <Logo viewBox="0 0 61 27">
            <g fill="none" fillRule="evenodd">
              <path fill="#006CFF" d="M0 .75v17.263h12.295V13.08H4.918V5.682h7.377V.75zM15.984.75v9.865H20.9V5.682h4.919V.75zM47.951.75v9.865h4.918V5.682h4.918V.75zM39.344.75v3.7h-3.688V.75h-4.918v17.263h13.524V.75h-4.918zm-3.688 12.33h3.688V9.383h-3.688v3.699z"/>
              <g transform="translate(47.275 12.88)">
                <path fill="#006CFF" d="M6.823 9.017c-1.12 0-2.028-.91-2.028-2.034 0-1.124.908-2.035 2.028-2.035s2.03.911 2.03 2.035a2.032 2.032 0 0 1-2.03 2.034m0-8.816C3.09.2.061 3.237.061 6.983c0 3.745 3.028 6.782 6.762 6.782 3.735 0 6.763-3.037 6.763-6.782C13.586 3.237 10.558.2 6.823.2" />
              </g>
            </g>
          </Logo>

          <h1>대한민국 모든 방 다 있다! 다방</h1>
          <a href="https://www.dabangapp.com/" target="_blank" rel="noopener noreferrer">바로가기</a>
          <AppBtn />
        </div>
      </TextWrap>
    </Wrap>
  )
}

export default AppDownloadComponent
