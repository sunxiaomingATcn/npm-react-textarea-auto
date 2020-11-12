'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 高度自动撑开的textarea
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * params maxLength: 默认3000
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * params placeholder: 默认'请输入'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var AutoTextarea = function (_React$Component) {
    _inherits(AutoTextarea, _React$Component);

    function AutoTextarea(props) {
        _classCallCheck(this, AutoTextarea);

        var _this = _possibleConstructorReturn(this, (AutoTextarea.__proto__ || Object.getPrototypeOf(AutoTextarea)).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(AutoTextarea, [{
        key: 'onKeyUp',
        value: function onKeyUp(ev) {
            var onChange = this.props.onChange;

            onChange && onChange(ev.target.value);
            this.setState({ value: ev.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;
            var _props = this.props,
                _props$placeholder = _props.placeholder,
                placeholder = _props$placeholder === undefined ? '请输入' : _props$placeholder,
                _props$maxLength = _props.maxLength,
                maxLength = _props$maxLength === undefined ? 3000 : _props$maxLength,
                _props$value = _props.value,
                initValue = _props$value === undefined ? '' : _props$value,
                onChange = _props.onChange;

            return _react2.default.createElement(
                'div',
                {
                    className: 'autoTextarea'
                },
                _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                        'span',
                        null,
                        value
                    ),
                    _react2.default.createElement('br', null)
                ),
                _react2.default.createElement('textarea', {
                    value: value,
                    placeholder: placeholder,
                    onChange: this.onKeyUp.bind(this),
                    onKeyUp: this.onKeyUp.bind(this),
                    maxLength: maxLength
                })
            );
        }
    }]);

    return AutoTextarea;
}(_react2.default.Component);

exports.default = AutoTextarea;