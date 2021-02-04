import React from 'react'
import withController from './Controller'

import { 
  Footer, Content, 
  TermsWrap, InfoWrap,
  Logo, Contact, SNSWrap, Select, SelectBtn, FamilySite,
} from './styled'
import { NAVER, INSTAGRAM, FACEBOOK } from 'utils/config'

const FooterComponent = ({
  wrapRef, isOpen,
  selectHandler,
}) => {
  return (
    <Footer>
      <TermsWrap>
        <ul>
          <li>
            <a
              href="https://static.dabangapp.com/terms/station3/station3_termsofcctv_201015.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              영상정보처리기기 운영·관리 방침
            </a>
          </li>
          <li>
            <a
              href="https://pro.dabangapp.com/terms/4"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보처리방침
            </a>
          </li>
        </ul>
      </TermsWrap>

      <Content>
        <InfoWrap>
          <Logo>
            <svg viewBox="0 0 168 23">
              <g fill="none" fillRule="evenodd" opacity=".7">
                <g transform="translate(0 .585)">
                  <path fill="#FEFEFE" d="M26.672 9.194a7.367 7.367 0 0 0-4.9-2.116 7.125 7.125 0 0 0-2.151-4.823 7.372 7.372 0 0 0-5.207-2.12 7.37 7.37 0 0 0-5.206 2.12 7.173 7.173 0 0 0 0 10.248 2.541 2.541 0 0 1 0 3.63 2.615 2.615 0 0 1-1.845.751 2.613 2.613 0 0 1-1.845-.752 2.527 2.527 0 0 1-.764-1.814c0-.686.271-1.33.764-1.815l.345-.339-3.362-3.308-.344.338A7.138 7.138 0 0 0 0 14.317c0 1.935.765 3.755 2.157 5.122a7.374 7.374 0 0 0 5.206 2.123 7.373 7.373 0 0 0 5.207-2.123 7.132 7.132 0 0 0 2.156-5.121 7.137 7.137 0 0 0-2.156-5.124 2.528 2.528 0 0 1-.765-1.815c0-.685.272-1.33.765-1.815a2.612 2.612 0 0 1 1.844-.753c.697 0 1.353.268 1.844.753a2.54 2.54 0 0 1 0 3.63l-.344.34 3.362 3.309.345-.34a2.612 2.612 0 0 1 1.844-.752c.697 0 1.352.267 1.845.752.492.484.764 1.13.764 1.815s-.272 1.33-.764 1.814a2.613 2.613 0 0 1-1.845.752 2.612 2.612 0 0 1-1.844-.752l-.345-.338-3.362 3.306.344.34a7.377 7.377 0 0 0 5.207 2.122 7.375 7.375 0 0 0 5.207-2.123 7.135 7.135 0 0 0 2.157-5.121 7.14 7.14 0 0 0-2.157-5.124" />
                </g>
                <path fill="#FEFEFE" d="M40.455 14.077l3.351-.32c.2 1.107.61 1.919 1.224 2.436.617.52 1.45.779 2.497.779 1.107 0 1.943-.23 2.506-.692.563-.463.842-1.002.842-1.62 0-.396-.118-.734-.354-1.014-.237-.277-.649-.519-1.24-.725-.403-.138-1.32-.382-2.754-.733-1.845-.45-3.14-1.002-3.885-1.66-1.048-.922-1.57-2.048-1.57-3.375 0-.854.246-1.655.738-2.399.492-.743 1.202-1.31 2.13-1.699.926-.39 2.044-.583 3.354-.583 2.14 0 3.75.462 4.833 1.384 1.08.924 1.648 2.156 1.703 3.697l-3.443.148c-.147-.86-.46-1.481-.947-1.858-.485-.378-1.212-.567-2.182-.567-1 0-1.783.202-2.349.606-.364.26-.546.607-.546 1.042 0 .397.17.736.511 1.017.435.361 1.49.734 3.164 1.122 1.676.39 2.913.792 3.717 1.209.801.416 1.43.984 1.883 1.705.454.72.68 1.61.68 2.672 0 .96-.271 1.861-.814 2.7-.543.84-1.31 1.463-2.302 1.872-.993.407-2.229.612-3.71.612-2.155 0-3.811-.49-4.967-1.471-1.156-.98-1.844-2.408-2.07-4.285M62.959 19.535V5.597h-5.06V2.758h13.547v2.839h-5.045v13.938zM80.496 6.672l-4.77 12.863h-3.65l6.64-16.776h3.64l6.826 16.776h-3.745zM94.982 19.535V5.597h-5.057V2.758h13.551v2.839h-5.049v13.938z"/>
                <path fill="#FEFEFE" d="M107.495 19.535h3.444V2.758h-3.444zM118.974 11.136c0 1.9.444 3.34 1.338 4.32.889.98 2.023 1.47 3.395 1.47 1.374 0 2.498-.486 3.378-1.46.88-.972 1.321-2.43 1.321-4.376 0-1.923-.43-3.358-1.287-4.303-.856-.946-1.992-1.42-3.412-1.42s-2.562.479-3.433 1.437c-.867.958-1.3 2.4-1.3 4.332m-3.547.114c0-1.71.258-3.143.776-4.304.39-.854.919-1.62 1.59-2.3.668-.68 1.405-1.182 2.203-1.51 1.064-.442 2.287-.664 3.676-.664 2.513 0 4.522.767 6.03 2.3 1.508 1.534 2.264 3.666 2.264 6.398 0 2.708-.749 4.828-2.247 6.358-1.495 1.529-3.498 2.294-6.002 2.294-2.534 0-4.55-.762-6.046-2.283-1.497-1.522-2.244-3.62-2.244-6.29M136.592 19.535V2.758h3.347l6.981 11.204V2.758h3.197v16.777h-3.454l-6.873-10.94v10.94zM155.84 15.53l3.388-.404c.108.85.398 1.499.871 1.948a2.41 2.41 0 0 0 1.718.674c.722 0 1.33-.27 1.825-.809.493-.538.738-1.265.738-2.18 0-.865-.235-1.552-.708-2.06-.475-.506-1.05-.757-1.73-.757-.45 0-.986.085-1.606.257l.385-2.805c.946.024 1.668-.178 2.165-.608.5-.428.748-.997.748-1.708 0-.605-.182-1.086-.546-1.446-.365-.359-.852-.539-1.458-.539-.6 0-1.109.206-1.531.613-.422.409-.68 1.005-.772 1.788l-3.224-.538c.224-1.086.56-1.954 1.016-2.604.449-.647 1.08-1.159 1.89-1.53.81-.372 1.716-.558 2.721-.558 1.717 0 3.096.539 4.133 1.618.853.881 1.282 1.878 1.282 2.987 0 1.577-.876 2.834-2.628 3.773 1.048.221 1.883.716 2.51 1.484.626.767.94 1.694.94 2.78 0 1.575-.585 2.92-1.755 4.03-1.17 1.11-2.626 1.666-4.371 1.666-1.65 0-3.02-.468-4.107-1.403-1.086-.934-1.72-2.158-1.893-3.669" />
              </g>
            </svg>
          </Logo>
  
          <Contact>
            <div>
              <p>서울시 서초구 서초대로 301 동익성봉빌딩 10층 (주)스테이션3</p>
              <p>
                <span><font>Tel</font>1899-6840</span>
                <span><font>fax</font>02-554-9774</span>
                <span className="break"><font>Contact</font>biz@station3.co.kr</span>
              </p>
              <p>Copyright(c) 2014-2018 Station3,Inc. All rights reserved.</p>
            </div>
          </Contact>
  
          <SNSWrap>
            <a href={NAVER} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 48 48">
                <g fill="none" fillRule="evenodd">
                  <rect width="48" height="48" fill="#FFF" opacity=".7" rx="6.72"/>
                  <path fill="#222" d="M36.121 36.507V12.279h-7.666v12.378l-8.983-12.378h-7.193v24.228h8.08V24.393l8.096 12.114z"/>
                </g>
              </svg>
            </a>
          
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 43 43">
                <path fill="#FFF" fillRule="evenodd" d="M5.375 0A5.384 5.384 0 0 0 0 5.375v32.25A5.384 5.384 0 0 0 5.375 43H21.5V28.219h-5.375V21.5H21.5v-5.375a8.065 8.065 0 0 1 8.063-8.063h5.375v6.72H32.25c-1.48 0-2.688-.138-2.688 1.343V21.5h6.72l-2.688 6.719h-4.032V43h8.063A5.384 5.384 0 0 0 43 37.625V5.375A5.384 5.384 0 0 0 37.625 0H5.375z" opacity=".7"/>
              </svg>
            </a>
        
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 43 43">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M38.969 29.563c0 5.186-4.22 9.406-9.407 9.406H13.438c-5.186 0-9.406-4.22-9.406-9.407V13.438c0-5.186 4.22-9.406 9.407-9.406h16.124c5.187 0 9.407 4.22 9.407 9.407v16.124zM29.562 0H13.438C6.016 0 0 6.015 0 13.438v16.124C0 36.986 6.015 43 13.438 43h16.124C36.986 43 43 36.985 43 29.562V13.438C43 6.016 36.985 0 29.562 0z" opacity=".7"/>
                  <path fill="#CCC" d="M21.5 28.219a6.725 6.725 0 0 1-6.719-6.719 6.725 6.725 0 0 1 6.719-6.719 6.725 6.725 0 0 1 6.719 6.719 6.725 6.725 0 0 1-6.719 6.719m0-17.469A10.744 10.744 0 0 0 10.75 21.5c0 5.942 4.808 10.75 10.75 10.75s10.75-4.808 10.75-10.75-4.808-10.75-10.75-10.75M34.042 10.743a1.792 1.792 0 1 1 0 0"/>
                </g>
              </svg>
            </a>
          </SNSWrap>
              
          <Select tabIndex="0" ref={wrapRef}>
            <SelectBtn onClick={selectHandler}>
              <span>family site</span>
              <svg width="13" height="7" viewBox="0 0 13 7">
                <path 
                  fill="#999" 
                  fillRule="evenodd" 
                  d={isOpen ? (
                      "M12.086 7L6.492 1.743l-.597.56.003-.003-4.97 4.671L0 6.101C1.373 4.808 5.21 1.204 6.492 0L13 6.115 12.086 7z"
                    ) : (
                      "M13 .885L12.086 0 6.492 5.257l-.597-.56.003.003L.928.029 0 .899C1.373 2.192 5.21 5.796 6.492 7L13 .885"
                    )}/>
              </svg>
            </SelectBtn>

            {isOpen && <FamilySite>
              <li>
                <a href="https://dabangapp.com" target="_blank" rel="noopener noreferrer">다방</a>
              </li>
              <li>
                <a href="https://pro.dabangapp.com" target="_blank" rel="noopener noreferrer">다방프로</a>
              </li>
              <li>
                <a href="https://owner.dabangapp.com" target="_blank" rel="noopener noreferrer">다방방주인</a>
              </li>
              <li>
                <a href="http://mediawill.com" target="_blank" rel="noopener noreferrer">미디어윌</a>
              </li>
            </FamilySite>}
          </Select>
        </InfoWrap>
      </Content>
    </Footer>
  )
}

export default withController(FooterComponent)
