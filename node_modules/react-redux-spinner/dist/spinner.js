'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var store = this.context.store;
      var config = this.props.config;

      this.previousPendingTasks = store.getState().pendingTasks;
      _nprogress2.default.configure(config);
      this.disposeStoreSubscription = store.subscribe(function () {
        var diff = store.getState().pendingTasks - _this2.previousPendingTasks;
        if (diff > 0) {
          _nprogress2.default.start();
        }
        if (diff < 0) {
          _nprogress2.default.inc();
        }
        if (store.getState().pendingTasks === 0) {
          _nprogress2.default.done();
        }
        _this2.previousPendingTasks = store.getState().pendingTasks;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.disposeStoreSubscription();
    }
  }, {
    key: 'render',
    value: function render() {
      return false;
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.contextTypes = {
  store: _react2.default.PropTypes.shape({
    getState: _react2.default.PropTypes.func.isRequired
  })
};

Spinner.propTypes = {
  config: _react2.default.PropTypes.object
};

Spinner.defaultProps = {
  config: {}
};

exports.default = Spinner;