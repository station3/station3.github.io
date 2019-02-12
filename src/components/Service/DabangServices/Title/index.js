import React from 'react'
import { withPrefix } from 'gatsby'

import {
  Wrap,
  Pro, Pay, Room,
  Desc, Link,
  ImgWrap, OwnerImage
} from './styled'
import AppBtn from 'components/AppBtn'

const TitleComponent = ({
  type, showLink, owner,
}) => {
  let temp = {
    url: '',
    desc: '',
    appStore: '',
    googlePlay: '',
  }

  switch (type) {
    case 'pro':
      temp.url = 'https://pro.dabangapp.com/#/'
      temp.desc = '공인중개사의 차이를 만든다! 다방 프로'
      temp.appStore = 'id1215588806'
      temp.googlePlay = 'dabang.pro'
      break;
      
    case 'room':
      temp.url = 'https://owner.dabangapp.com/'
      temp.desc = '스마트한 임대 관리 서비스! 다방 방주인'
      temp.appStore = 'id1438069281'
      temp.googlePlay = 'dabanghouseowner'
      break;

    case 'pay':
      temp.desc = '월세를 내는 가장 똑똑한 방법! 다방 페이'
      break;
    default:
      break;
  }

  return (
    <Wrap>
      {type === 'pro' ? <Pro /> : type  === 'pay' ? <Pay /> : type === 'room' ? <Room /> : null}

      <Desc type={type}>{temp.desc}</Desc>

      {showLink && (
        <>
          <Link href={temp.url} target="_blank" rel="noopener noreferrer">바로가기</Link>
          <AppBtn
            type={type}
            appStore={temp.appStore}
            googlePlay={temp.googlePlay}
          />
          {
            owner &&
            <ImgWrap>
              <OwnerImage src={withPrefix("/images/service/services/owner.png")} alt="" />
            </ImgWrap>
          }
        </>
      )}
    </Wrap>
  )
}

export default TitleComponent
