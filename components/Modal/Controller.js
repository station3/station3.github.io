import React, { Component } from 'react';

const Controller = ModalComponent => class extends Component {

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    this._body.style.top = this._header.clientHeight + 'px';
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
  }

  render() {
    return (
      <ModalComponent 
        {...this.props}
        headerRef={ref => this._header = ref}
        bodyRef={ref => this._body = ref} />
    );
  }
}

export default Controller;