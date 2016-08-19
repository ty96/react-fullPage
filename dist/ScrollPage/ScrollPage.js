'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollPage = function (_Component) {
  _inherits(ScrollPage, _Component);

  function ScrollPage(props) {
    _classCallCheck(this, ScrollPage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollPage).call(this, props));

    _this.state = {
      curPage: _this.props.curPage,
      totalPage: _this.props.totalPage
    };
    return _this;
  }

  _createClass(ScrollPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
      this.addWheelEvent();
      window.onresize = document.onresize = this.resize.bind(this);
      window.turnTo = document.turnTo = this.turnTo.bind(this);
    }
  }, {
    key: 'handle',
    value: function handle(delta) {
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
  }, {
    key: 'wheel',
    value: function wheel(event) {
      var delta = 0;

      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) {
        delta = -event.detail / 3;
      }

      if (delta) {
        this.handle(delta);
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      var translatey = 'translatey(-' + window.innerHeight * (this.state.curPage - 1) + 'px)';
      for (var i = 0; i < this.state.totalPage; i++) {
        document.getElementsByTagName('section')[i].style.transform = translatey;
        document.getElementsByTagName('section')[i].style.height = window.innerHeight + 'px';
      }
    }
  }, {
    key: 'removeWheelEvent',
    value: function removeWheelEvent() {
      window.removeEventListener('DOMMouseScroll', this.wheel.bind(this), false);
      window.onmousewheel = document.onmousewheel = '';
    }
  }, {
    key: 'addWheelEvent',
    value: function addWheelEvent() {
      window.addEventListener('DOMMouseScroll', this.wheel.bind(this), false);
      window.onmousewheel = document.onmousewheel = this.wheel.bind(this);
    }
  }, {
    key: 'turnTo',
    value: function turnTo(num) {
      this.setState({ curPage: num });
      var translatey = 'translatey(-' + window.innerHeight * (num - 1) + 'px)';
      var length = document.getElementsByTagName('section').length;
      for (var i = 0; i < length; i++) {
        document.getElementsByTagName('section')[i].style.transform = translatey;
      }
      this.removeWheelEvent();

      setTimeout(this.addWheelEvent.bind(this), 1200);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'fixed'
          } },
        this.props.children
      );
    }
  }]);

  return ScrollPage;
}(_react.Component);

ScrollPage.propTypes = {
  curPage: _react.PropTypes.number.isRequired,
  totalPage: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.any
};
exports.default = ScrollPage;
