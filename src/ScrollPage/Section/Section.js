import style from './style.css';
import React, { Component, PropTypes } from 'react';

class Section extends Component {
  static propTypes = {
    style: PropTypes.string,
    children: PropTypes.any,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <section className={style.son}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;