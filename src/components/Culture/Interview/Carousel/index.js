import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'

import { INTERVIEWS } from 'utils/config'
import {
  Carousel,
  CarouselCount,
  CarouselList,
  Counter,
  CounterBtn,
  Wrap
} from './styled'

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: 1,
    }
  }
  
  static defaultProps = {
    options: {
      continuous: false,
    },
  }
  
  _callback = (index, elem) => {
    this.setState({
      current: index + 1,
    })
  }
  
  pad = (num, width = 2) => {
    let _num = num+'';
    return _num.length >= width ? _num : new Array(width - _num.length + 1).join('0') + _num;
  }
  
  render() {
    const { options } = this.props;
    const { current } = this.state;
    
    return (
      <Wrap>
        <Carousel>
          <ReactSwipe
            swipeOptions={{
              ...options,
              callback: this._callback,
            }} 
            ref={el => this.reactSwipeEl = el}>

            {INTERVIEWS.map((data) => {
              return (
                <CarouselList key={data.label}>
                  <p>{data.text}</p>
                  <h2>{data.label}</h2>
                </CarouselList>
              )
            })}
          </ReactSwipe>
        </Carousel>
        <CarouselCount>
          <CounterBtn>
            <button className={1 === current ? 'disabled':''} onClick={() => this.reactSwipeEl.prev()}>
              <svg width="11" height="20" viewBox="0 0 11 20">
                <path fillRule="evenodd" d="M9.61 20L11 18.594 2.739 9.987l.881-.918-.005.005 7.34-7.647L9.586 0 0 9.987 9.61 20"/>
              </svg>
            </button>

            <button className={INTERVIEWS.length === current ? 'disabled':''} onClick={() => this.reactSwipeEl.next()}>
              <svg width="11" height="20" viewBox="0 0 11 20">
                <path fillRule="evenodd" d="M1.39 0L0 1.406l8.261 8.607-.881.918.005-.005-7.34 7.647L1.414 20 11 10.013 1.39 0"/>
              </svg>
            </button>
          </CounterBtn>

          <Counter>
            <h2>{this.pad(current)}</h2>
            <div>
              <div />
            </div>
            <span>{this.pad(INTERVIEWS.length)}</span>
          </Counter>
        </CarouselCount>
      </Wrap>
    )
  }
}

export default CarouselComponent