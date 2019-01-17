import React, { Component } from 'react'

const Controller = Wrapper => class extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
    }
  }
  
  selectHandler = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      if (this.state.isOpen) {
        document.addEventListener('keydown', this.onKeyDown, false)
        document.addEventListener('mousedown', this.onMouseDown, false)
        
      } else {
        document.removeEventListener('keydown', this.onKeyDown)
        document.removeEventListener('mousedown', this.onMouseDown)
      }
    })
  }
  
  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({
        isOpen: false,
      }, () => {
        document.removeEventListener('keydown', this.onKeyDown)
        document.removeEventListener('mousedown', this.onMouseDown)
      })
    }
  }
  
  onMouseDown = e => {
    if (this._wrapper && !this._wrapper.contains(e.target)) {
      
      this.setState({
        isOpen: false
      }, () => {
        document.removeEventListener('keydown', this.onKeyDown)
        document.removeEventListener('mousedown', this.onMouseDown)
      })
    }
  }
  
  render() {
    return (
      <Wrapper
        {...this.state}
        {...this.props}
        wrapRef={ref => this._wrapper = ref}
        selectHandler={this.selectHandler} />
    )
  }
}

export default Controller