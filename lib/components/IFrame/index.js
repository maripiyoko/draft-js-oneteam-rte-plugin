'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

var _dom = require('../../helpers/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IFrame = function IFrame(props) {
  var contentState = props.contentState,
      block = props.block,
      className = props.className,
      _props$theme = props.theme,
      theme = _props$theme === undefined ? {} : _props$theme,
      otherProps = _objectWithoutProperties(props, ['contentState', 'block', 'className', 'theme']);

  var blockProps = otherProps.blockProps,
      customStyleMap = otherProps.customStyleMap,
      customStyleFn = otherProps.customStyleFn,
      decorator = otherProps.decorator,
      forceSelection = otherProps.forceSelection,
      offsetKey = otherProps.offsetKey,
      selection = otherProps.selection,
      tree = otherProps.tree,
      elementProps = _objectWithoutProperties(otherProps, ['blockProps', 'customStyleMap', 'customStyleFn', 'decorator', 'forceSelection', 'offsetKey', 'selection', 'tree']);

  var combinedClassName = (0, _unionClassNames2.default)(theme.image, className);
  var attributes = contentState.getEntity(block.getEntityAt(0)).getData();

  return _react2.default.createElement('iframe', _extends({}, elementProps, attributes, {
    style: (0, _dom.cssToObject)(attributes.style || ''),
    className: combinedClassName
  }));
};

exports.default = IFrame;