import styled from 'styled-components'

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`

export const Wrap = styled.div`
  width: 90%;
  max-width: ${props => props.width + props.sizeType};
  height: 90%;
  max-height: ${props => props.height}px;
  border-radius: 6px;
  background-color: #fff;
  /* box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.6); */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;

  transition: max-width 0.5s;
  transition-timing-function: ease-in-out;
`

export const Header = styled.header`
  /* height: 14px; */
  padding: 20px 20px 10px;
  line-height: 14px;
  position: relative;
`

export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
	color: #000;
  font-size: 18px;
	letter-spacing: -0.4px;
`

export const Description = styled.p`
  margin-bottom: 8px;
	color: #444;
  font-size: 14px;
  letter-spacing: -0.3px;
  line-height: 22px;
  white-space: pre-wrap;
`


export const CloseBtn = styled.p`
  cursor: pointer;

  > svg {
    fill: #d1d1d1;
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover {
      fill: #aaa;
    }

    &:active {
      fill: #585858;
    }
  }
`

export const Body = styled.div`
  padding: 0 ${props => props.type === 'apt' ? '0' : '25px'};
  padding-bottom: ${props => props.type === 'apt' ? '0' : '30px'};
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-button {
    height: 0;
  }
  &::-webkit-scrollbar-track {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #363d4a;
  }
`