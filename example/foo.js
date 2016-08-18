import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ScrollPage, Section } from './dist/bundle';

class Foo extends Component {
  render() {
    return (
      <ScrollPage
        curPage={1}
        totalPage={5}
      >
        <Section>
          Page1
        </Section>
        <Section>
          Page2
        </Section>
        <Section>
          Page3
        </Section>
        <Section>
          Page4
        </Section>
        <Section>
          Page5
        </Section>
      </ScrollPage>
    )
  }
}

var app = document.getElementById('app');

ReactDOM.render(<Foo />, app);