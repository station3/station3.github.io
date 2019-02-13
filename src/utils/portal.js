import { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = props.className || 'portal'
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.removeChild(this.el);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      document.removeEventListener('keydown', this.onKeyDown);
      this.props.handle();
    }
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Portal;