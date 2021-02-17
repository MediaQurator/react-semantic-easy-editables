"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Editable = _interopRequireDefault(require("./Editable"));

var _EmbeddedIframeEditor = _interopRequireDefault(require("../editingTools/EmbeddedIframeEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ResponsiveIframe = function ResponsiveIframe(_ref) {
  var _extends2;

  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var handleSave = function handleSave(newContent) {
    props.onSave(newContent);
  };

  var _props$content = props.content,
      src = _props$content.src,
      height = _props$content.height,
      width = _props$content.width,
      allowFullScreen = _props$content.allowFullScreen,
      title = _props$content.title;
  var styles = {
    iframeContainer: {
      position: "relative",
      height: height,
      overflow: "hidden",
      width: width,
      maxWidth: "100%"
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Editable["default"], _extends({
    Editor: _EmbeddedIframeEditor["default"],
    handleSave: handleSave,
    content: {
      src: src
    }
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "embedded-iframe",
    style: _extends({}, styles.iframeContainer, {}, props.containerStyles)
  }, /*#__PURE__*/_react["default"].createElement("iframe", _extends((_extends2 = {
    title: "iframe",
    src: src,
    style: styles.iframe,
    frameBorder: "0",
    allowFullScreen: true,
    height: "100%",
    width: "100%"
  }, _extends2["title"] = title, _extends2), props.iframeProps))));
};

ResponsiveIframe.propTypes = {
  content: _propTypes["default"].shape({
    src: _propTypes["default"].string,
    height: _propTypes["default"].string,
    width: _propTypes["default"].string,
    allowFullScreen: _propTypes["default"]["boolean"],
    title: _propTypes["default"].string
  }).isRequired,
  onSave: _propTypes["default"].func.isRequired
};
ResponsiveIframe.defaultProps = {
  content: {
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '315px',
    width: '560px',
    title: 'lofi hip hop radio'
  },
  onSave: function onSave(newContent) {
    return console.log('Implement a function to save changes!', newContent);
  },
  iframeProps: {}
};
var _default = ResponsiveIframe;
exports["default"] = _default;