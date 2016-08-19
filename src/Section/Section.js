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
      <section style={{
        transition: 'transform 1s ease 0s',
        position: 'relative',
      }}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;