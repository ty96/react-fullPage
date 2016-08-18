## Why another react-fullPage?
* Simpler & Smaller
* ES6
* Follow ESlint (Airbnb)
* Adapt to our [generator-modation](https://github.com/zhaozhiming/generator-modation) (It's a comfortable react-redux generator)

## How to use?
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ScrollPage, Section } from '/dist/bundle';

class Foo extends Component {
  render() {
    return (
      <ScrollPage
        curPage={1}
        totalPage={4}
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
      </ScrollPage>
    )
  }
}

var app = document.getElementById('app');

ReactDOM.render(<Foo />, app);
```


## How to run example?

```
npm install

cd ./example
webpack

// That's it! Open example/index.html directly.
```

## API
```
window.turnTo(number);

// 0 < number <= totalPage

```
If `number < 0 || number > totalPage` , it will <span style="color: orange">not print any error</span> but keep scrolling to target position. `transform to window.innerHeight * number`