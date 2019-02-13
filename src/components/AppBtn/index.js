import React, { Component } from 'react'
import { AppleBtn, BtnWrap, GoogleBtn } from './styled'

class AppBtn extends Component {
  static defaultProps = {
    googlePlay: 'dabang',
    appStore: 'id814840066',
  }
  
  render() {
    const { appStore, googlePlay, type } = this.props;
    return (
      <BtnWrap type={type}>
        <AppleBtn href={`https://itunes.apple.com/kr/app/${appStore}`} target="_blank" rel="noopener noreferrer" />
        <GoogleBtn href={`https://play.google.com/store/apps/details?id=kr.co.station3.${googlePlay}&hl=ko`} target="_blank" rel="noopener noreferrer" />
      </BtnWrap>
    )
  }
}

export default AppBtn
