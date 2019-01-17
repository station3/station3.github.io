import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default ModalComponent => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  menuHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      const { isOpen } = this.state

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    })
  }
  
  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  render() {
    return (
      <ModalComponent
        {...this.props}
        {...this.state}
        menuHandler={this.menuHandler} />
    )
  }
}
