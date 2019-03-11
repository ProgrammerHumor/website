import React, { Component } from 'react';

class ScrollToPos extends Component<any, any> {
  componentDidUpdate() {
    console.log(this.props)
    window.scrollTo(0, this.props.refren.current.offsetTop)
  }

  render() {
    return <div></div >
  }
}

export default ScrollToPos;