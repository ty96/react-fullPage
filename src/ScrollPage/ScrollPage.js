import style from './style.css';
import React, { Component, PropTypes } from 'react';

class ScrollPage extends Component {
  static propTypes = {
    curPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      curPage: this.props.curPage,
      totalPage: this.props.totalPage,
    };
  }

  componentDidMount() {
    this.resize();
    this.addWheelEvent();
    window.onresize = document.onresize = this.resize.bind(this);
    window.turnTo = document.turnTo = this.turnTo.bind(this);
  }

  handle(delta) {
    if (delta < 0) {
      if (this.state.curPage < this.state.totalPage) {
        this.turnTo(this.state.curPage + 1);
      }
    } else {
      if (this.state.curPage > 1) {
        this.turnTo(this.state.curPage - 1);
      }
    }
  }

  wheel(event) {
    let delta = 0;

    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = - delta;
    } else if (event.detail) {
      delta = - event.detail / 3;
    }

    if (delta) {
      this.handle(delta);
    }
  }

  resize() {
    const translatey = `translatey(-${window.innerHeight * (this.state.curPage - 1)}px)`;
    for (let i = 0; i < this.state.totalPage; i++) {
      document.getElementsByTagName('section')[i].style.transform = translatey;
      document.getElementsByTagName('section')[i].style.height = `${window.innerHeight}px`;
    }
  }

  removeWheelEvent() {
    window.removeEventListener('DOMMouseScroll', this.wheel.bind(this), false);
    window.onmousewheel = document.onmousewheel = '';
  }

  addWheelEvent() {
    window.addEventListener('DOMMouseScroll', this.wheel.bind(this), false);
    window.onmousewheel = document.onmousewheel = this.wheel.bind(this);
  }

  turnTo(num) {
    this.setState({ curPage: num });
    const translatey = `translatey(-${window.innerHeight * (num - 1)}px)`;
    const length = document.getElementsByTagName('section').length;
    for (let i = 0; i < length; i++) {
      document.getElementsByTagName('section')[i].style.transform = translatey;
    }
    this.removeWheelEvent();

    setTimeout(this.addWheelEvent.bind(this), 1200);
  }

  render() {
    return (
      <div className={style.box}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollPage;